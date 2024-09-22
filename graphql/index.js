import { makeExecutableSchema } from "@graphql-tools/schema";
import lodash from "lodash";
const { merge } = lodash;

import Character from "./typeDefs/Character.js";
import Company from "./typeDefs/Company.js";
import Faction from "./typeDefs/Faction.js";
import Game from "./typeDefs/Game.js";
import GameEngine from "./typeDefs/GameEngine.js";
import GameFranchise from "./typeDefs/GameFranchise.js";
import Item from "./typeDefs/Item.js";
import Level from "./typeDefs/Level.js";
import Location from "./typeDefs/Location.js";
import Person from "./typeDefs/Person.js";
import Race from "./typeDefs/Race.js";
import sharedTypeDefs from "./typeDefs/shared.js";
import System from "./typeDefs/System.js";
import World from "./typeDefs/World.js";

import gameResolvers from "./resolvers/gameResolvers.js";
import systemResolvers from "./resolvers/systemResolvers.js";

const schema = makeExecutableSchema({
  typeDefs: [
    Character,
    Company,
    Faction,
    Game,
    GameEngine,
    GameFranchise,
    Item,
    Level,
    Location,
    Person,
    Race,
    sharedTypeDefs,
    System,
    World,
  ],
  resolvers: merge(gameResolvers, systemResolvers),
});

export default schema;
