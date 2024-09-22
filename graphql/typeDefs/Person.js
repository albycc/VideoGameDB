import { gql } from "apollo-server-express";

const personTypeDefs = gql`
  type Person {
    name: String!
    dateBorn: Date
    occupation: [String!]
    games: [Game!]
    company: [CompaniesWorked!]
  }

  type CompaniesWorked {
    company: Company!
    dateStarted: Date
    dateEnded: Date
  }

  input CompaniesWorkedInput {
    company: ID!
    dateStarted: DateInput
    dateEnded: DateInput
  }

  input PersonInput {
    name: String!
    dateBorn: DateInput
    occupation: [String!]
    games: [ID!]
    company: [CompaniesWorkedInput]
  }

  type Query {
    persons: [Person!]
    person(id: ID!): Person
  }

  type Mutation {
    addPerson(personInput: PersonInput!): Person
    editPerson(id: ID!, personInput: PersonInput!): Person
    deletePerson(id: ID!): Person
  }
`;

export default personTypeDefs;
