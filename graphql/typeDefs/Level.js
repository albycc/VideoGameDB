import { gql } from "apollo-server-express";

const levelTypeDefs = gql`
  type Level {
    name: String!
    items: [Item!]
    enemies: [Character!]
    game: Game!
  }

  input LevelInput {
    name: String!
    items: [ID!]
    enemies: [ID!]
    game: ID!
  }

  type Query {
    levels: [Level!]
    level(id: ID!): Level
  }

  type Mutation {
    addLevel(levelInput: LevelInput!): Level
    editLevel(id: ID!, levelInput: LevelInput!): Level
    deleteLevel(id: ID!): Level
  }
`;

export default levelTypeDefs;
