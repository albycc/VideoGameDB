import { gql } from "apollo-server-express";

const locationTypeDefs = gql`
  type Location {
    name: String!
    type: String
    firstAppearance: Game
    createdBy: [Creator!]
    games: [Game!]
    population: Int
    inhabitants: [Character!]
  }

  union Creator = Company | Person

  input LocationInput {
    name: String
    type: String
    firstAppearance: ID
    createdBy: [ID!]
    games: [ID!]
    population: Int
    inhabitants: [ID!]
  }

  type Query {
    locations: [Location!]
    location(id: ID!): Location
  }

  type Mutation {
    addLocation(locationInput: LocationInput!): Location
    editLocation(id: ID!, locationInput: LocationInput): Location
    deleteLocation(id: ID!): Location
  }
`;

export default locationTypeDefs;
