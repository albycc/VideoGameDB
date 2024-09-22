import { gql } from "apollo-server-express";

const raceTypeDefs = gql`
  type Race {
    name: String!
    characters: [Character!]
    description: String
    depiction: String
    games: [Game!]
  }

  input RaceInput {
    name: String
    description: String
    depiction: String
    game: [ID!]
  }

  type Query {
    races: [Race!]
    race(id: ID!): Race
  }

  type Mutation {
    addRace(raceInput: RaceInput!): Race
    editRace(id: ID!, raceInput: RaceInput): Race
    deleteRace(id: ID!): Race
  }
`;

export default raceTypeDefs;
