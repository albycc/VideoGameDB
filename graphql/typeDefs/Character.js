import { gql } from "apollo-server-express";

const characterTypeDefs = gql`
  type Character {
    name: String!
    type: [String!]
    homeland: [Location!]
    race: Race
    gender: Gender
    height: Int
    hairColor: [String]
    eyeColor: [String]
    age: [CharacterAge!]
    weapon: [String!]
    aliases: [String!]
    affiliation: [Faction!]
    friends: [Character!]
    enemies: [Character!]
    firstAppearance: Game
    games: [Game!]
    designedBy: [Person!]
    voicedBy: [Person!]
    appearance: String
    personality: String
    biography: String
  }

  enum Gender {
    MALE
    FEMALE
    UNKNOWN
  }

  type CharacterAge {
    age: Int!
    game: Game!
  }

  input CharacterAgeInput {
    age: Int
    game: ID
  }

  input CharacterInput {
    name: String!
    type: [String!]
    homeland: [ID!]
    race: ID
    gender: Gender
    height: Int
    hairColor: [String]
    eyeColor: [String]
    age: [CharacterAgeInput]
    weapon: [ID!]
    aliases: [String!]
    affiliation: [ID!]
    friends: [ID!]
    enemies: [ID!]
    firstAppearance: ID
    games: [ID!]
    designedBy: [ID!]
    voicedBy: [ID!]
    appearance: String
    personality: String
    biography: String
  }

  type Query {
    characters: [Character!]
    character(id: ID!): Character
  }

  type Mutation {
    addCharacter(characterInput: CharacterInput!): Character
    editCharacter(id: ID!, characterInput: CharacterInput!): Character
    deleteCharacter(id: ID!): Character
  }
`;

export default characterTypeDefs;
