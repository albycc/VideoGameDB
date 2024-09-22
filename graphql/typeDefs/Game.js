import { gql } from "apollo-server-express";

const gameTypeDefs = gql`
  enum GameGenre {
    Action
    Action_adventure
    Action_RPG
    Adventure
    Casual
    Fighting
    FPS
    MMO
    MMORPG
    Party
    Platformer
    Puzzle
    Racing
    Real_time_strategy
    RPG
    Shooter
    Simulation
    Sports
    Stealth
    Strategy
    Survival
    Tactical_role_playing
  }

  type Game {
    id: ID!
    title: String!
    developer: [Company!]
    publisher: [Company!]
    genre: [GameGenre!]
    platform: [System!]
    firstReleased: Date
    dateReleases: [GameDateRelease!]
    people: [Person!]
    characters: [Character!]
    text: String
    world: World
    levels: [Level!]
    races: [Race!]
    reception: GameReception
    imageCover: String
  }

  type GameDateRelease {
    date: Date
    platform: System
  }

  type GameReception {
    score: Int!
    scoreLimit: Int!
    reviewer: GameReviewer!
  }

  union GameReviewer = Company | Person

  input GameDateReleaseInput {
    date: DateInput!
    platform: ID!
  }

  input GameInput {
    title: String
    developer: [ID!]
    publisher: [ID!]
    genre: [GameGenre!]
    platform: [ID!]
    firstReleased: DateInput
    dateReleases: GameDateReleaseInput
    text: String
  }

  type Query {
    games: [Game!]
    game(id: ID!): Game
  }

  type Mutation {
    addGame(gameInput: GameInput!): Game
    editGame(id: ID!, gameInput: GameInput): Game
    deleteGame(id: ID!): Game
  }
`;

export default gameTypeDefs;
