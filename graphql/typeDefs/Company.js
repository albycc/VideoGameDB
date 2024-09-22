import { gql } from "apollo-server-express";

const companyTypeDefs = gql`
  type Company {
    name: String!
    countryOfOrigin: String!
    people: [String!]
    dateFounded: Date
    games: [Game!]
    url: String
  }

  input CompanyInput {
    name: String!
    countryOfOrigin: String!
    dateFounded: DateInput
    url: String
  }

  type Query {
    companies: [Company!]
    company(id: ID!): Company
  }

  type Mutation {
    addCompany(companyInput: CompanyInput!): Company
    editCompany(id: ID!, companyInput: CompanyInput!): Company
    deleteCompany(id: ID!): Company
  }
`;

export default companyTypeDefs;
