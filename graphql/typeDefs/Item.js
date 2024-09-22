import { gql } from "apollo-server-express";

const itemTypeDefs = gql`
  type Item {
    name: String!
    type: String
    games: [Game!]
  }

  input ItemInput {
    name: String
    type: String
  }

  type Query {
    items: [Item]
    item(id: ID!): Item
  }

  type Mutation {
    addItem(itemInput: ItemInput!): Item
    editItem(id: ID!, itemInput: ItemInput!): Item
    deleteItem(id: ID!): Item
  }
`;

export default itemTypeDefs;
