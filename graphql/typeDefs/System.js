import { gql } from "apollo-server-express";

const systemTypeDefs = gql`
  enum TYPE {
    console
    computer
  }

  type System {
    id: ID!
    name: String!
    developer: [String]
    manufacturer: [String]
    unitsSold: Float
    games: [Game!]
    dateReleased: Date
  }

  input SystemInput {
    name: String
    developer: [String]
    manufacturer: [String]
    unitsSold: Float
    dateReleased: DateInput
  }

  type Query {
    systems: [System!]!
    system(id: ID!): System
  }

  type Mutation {
    addSystem(systemInput: SystemInput!): System
    editSystem(id: ID!, systemInput: SystemInput!): System
    deleteSystem(id: ID!): System
  }
`;

export default systemTypeDefs;
