import { gql } from "apollo-server-express";

const gameEngineTypeDefs = gql`
  type GameEngine {
    name: String!
    developer: [Company!]
    writtenIn: [String!]
    versionReleases: [GameEngineVersion!]
    platforms: [System!]
    games: [Game!]
  }

  type GameEngineVersion {
    version: String!
    date: Date
  }

  input GameEngineVersionInput {
    version: String!
    date: DateInput
  }

  input GameEngineInput {
    name: String!
    developer: [ID!]
    writtenIn: [String!]
    versionReleases: [GameEngineVersionInput!]
    platforms: [ID!]
    games: [ID!]
  }

  type Query {
    gameEngines: [GameEngine!]
    gameEngine(id: ID!): GameEngine
  }

  type Mutation {
    addGameEngine(gameEngineInput: GameEngineInput!): GameEngine
    editGameEngine(id: ID!, gameEngineInput: GameEngineInput): GameEngine
    deleteGameEngine(id: ID!): Game
  }
`;

export default gameEngineTypeDefs;
