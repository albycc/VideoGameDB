import Game from "../../models/Game.js";
import System from "../../models/System.js";
import { Types } from "mongoose";

const gameResolvers = {
  Query: {
    games: async () => {
      const games = await Game.find();

      return games;
    },
    game: async (_, { id }, context) => {
      try {
        const game = await Game.findById(id);

        if (!game) {
          return { message: "No game found with that id", status: 404 };
        }

        return game;
      } catch (error) {
        return error;
      }
    },
  },
  Mutation: {
    addGame: async (parent, { gameInput }) => {
      try {
        const { title, genre, platform, dateReleased } = gameInput;
        const newGame = new Game({ title, genre, platform, dateReleased });
        const response = await newGame.save();

        console.log("platform: ", platform);

        if (platform && platform.length > 0) {
          const platforms = await System.find(
            {
              _id: { $in: platform },
            },
            "_id"
          );

          console.log("platforms: ", platforms);

          const platformsResponse = await System.updateMany(
            { _id: { $in: platforms } },
            { $push: { games: response._id } }
          );

          console.log("platformsResponse: ", platformsResponse);
        }

        return response;
      } catch (error) {
        return error;
      }
    },
    editGame: async (_, { id, gameInput }) => {
      try {
        const game = await Game.findById(id);

        const { title, genre, platform, dateReleased } = gameInput;

        if (!game) {
          return {
            message: "No game found with that id. Could not delete game",
            status: 404,
          };
        }

        game.title = title || game.title;
        game.genre = genre || game.genre;
        game.platform = platform || game.platform;
        game.dateReleased = dateReleased || game.dateReleased;

        const response = await game.save();

        if (platform) {
          const oldPlatforms = await System.find(
            {
              _id: { $in: game.platform },
            },
            "_id"
          );

          const oldPlatformsResponse = await System.updateMany(
            { _id: oldPlatforms },
            { $pull: { games: game._id } }
          );

          console.log("oldPlatformsResponse: ", oldPlatformsResponse);

          const platforms = await System.find(
            {
              _id: { $in: platform },
            },
            "_id"
          );

          console.log("platforms: ", platforms);

          const platformsResponse = await System.updateMany(
            { _id: { $in: platforms } },
            { $push: { games: response._id } }
          );

          console.log("platformsResponse: ", platformsResponse);
        }

        // const response = await Game.findByIdAndUpdate(id, { ...gameInput });

        return response;
      } catch (error) {
        return error;
      }
    },
    deleteGame: async (_, { id }) => {
      try {
        const game = await Game.findById(id);

        if (!game) {
          console.log("error deleting game");
          return {
            message: "No game found with that id. Could not delete game",
            status: 404,
          };
        }

        const response = await Game.findByIdAndDelete(id);

        //remove referens from Systems
        const platformsResponse = await System.updateMany(
          { games: { $in: game._id } },
          { $pull: { games: game._id } }
        );

        console.log("platformsResponse: ", platformsResponse);

        return response;
      } catch (error) {
        return error;
      }
    },
  },
  Game: {
    platform: async (parent) => {
      return await System.find({ _id: { $in: parent.platform } });
    },
  },
};

export default gameResolvers;
