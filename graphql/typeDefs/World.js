import { gql } from "apollo-server-express";

const worldTypeDefs = gql`
  type World {
    name: String!
    description: String
    history: String
    games: [Game!]
    locations: [Location!]
    races: [Race!]
    provinces: [World!]
  }

  input WorldInput {
    name: String
    description: String
    history: String
    games: [ID!]
    locations: [ID!]
    races: [ID!]
  }

  type Query {
    worlds: [World!]
    world(id: ID!): World
  }

  type Mutation {
    addWorld(worldInput: WorldInput!): World
    editworld(id: ID!, worldInput: WorldInput): World
    deleteWorld(id: ID!): World
  }
`;

export default worldTypeDefs;
