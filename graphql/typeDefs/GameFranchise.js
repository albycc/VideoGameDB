import { gql } from "apollo-server-express";

const gameFranchiseTypeDefs = gql`
  type GameFranchise {
    name: String!
    genre: [GameGenre!]
    firstGame: Game
    games: [Game]!
    creators: [Person!]
    developer: [Company!]
    publisher: [Company!]
  }

  input GameFranchiseInput {
    name: String
    genre: [GameGenre!]
    firstGame: ID
    games: [ID]!
    creators: [ID!]
    developer: [ID!]
    publisher: [ID!]
  }

  type Query {
    gameFranchises: [GameFranchise!]
    gameFranchise(id: ID!): GameFranchise
  }

  type Mutation {
    addGameFranchise(gameFranchiseInput: GameFranchiseInput!): GameFranchise
    editGameFranchise(
      id: ID!
      gameFranchiseInput: GameFranchiseInput
    ): GameFranchise
    deleteGameFranchise(id: ID!): GameFranchise
  }
`;

export default gameFranchiseTypeDefs;
