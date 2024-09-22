import Game from "../../models/Game.js";
import System from "../../models/System.js";

const systemResolvers = {
  Query: {
    systems: async () => await System.find(),
    system: async (_, { id }, context) => {
      try {
        const system = await System.findById(id);

        if (!system) {
          return { message: "No game found with that id", status: 404 };
        }

        return system;
      } catch (error) {
        return error;
      }
    },
  },
  Mutation: {
    addSystem: async (_, { systemInput }) => {
      try {
        const { name, developer, manufacturer, unitsSold, dateReleased } =
          systemInput;
        const newSystem = new System({
          name,
          developer,
          manufacturer,
          unitsSold,
          dateReleased,
        });
        const response = await newSystem.save();

        return response;
      } catch (error) {
        return error;
      }
    },
    editSystem: async (_, { id, systemInput }) => {
      try {
        const system = await System.findById(id);

        const { name, developer, manufacturer, unitsSold, dateReleased } =
          systemInput;

        console.log(system);

        if (!system) {
          return {
            message: "No system found with that id.",
            status: 404,
          };
        }

        system.name = name || system.name;
        system.developer = developer || system.developer;
        system.manufacturer = manufacturer || system.manufacturer;
        system.unitsSold = unitsSold || system.unitsSold;
        system.dateReleased = dateReleased || system.dateReleased;

        const response = await system.save();

        return response;
      } catch (error) {
        return error;
      }
    },
    deleteSystem: async (_, { id }) => {
      try {
        const system = await System.findById(id);

        console.log(system);

        if (!system) {
          return {
            message: "No system found with that id. Could not delete system",
            status: 404,
          };
        }

        const response = await System.findByIdAndDelete(id);

        await Game.updateMany(
          {
            platform: { $in: system._id },
          },
          {
            $pull: { platform: system._id },
          }
        );

        return response;
      } catch (error) {
        return error;
      }
    },
  },
  System: {
    games: async (parent) => {
      return await Game.find({ _id: { $in: parent.games } });
    },
  },
};

export default systemResolvers;
