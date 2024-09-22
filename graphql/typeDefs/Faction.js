import { gql } from "apollo-server-express";

const factionTypeDefs = gql`
  type Faction {
    name: String!
    type: [String!]
    allies: [Faction!]
    enemies: [Faction!]
    members: [Character!]
  }

  input FactionInput {
    name: String!
    type: [String!]
    allies: [ID!]
    enemies: [ID!]
    members: [ID!]
  }

  type Query {
    factions: [Faction!]
    faction(id: ID!): Faction
  }

  type Mutation {
    addFaction(factionInput: FactionInput!): Faction
    editFaction(id: ID!, factionInput: FactionInput!): Faction
    deleteFaction(id: ID!): Faction
  }
`;

export default factionTypeDefs;
