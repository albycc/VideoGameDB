import { gql } from "apollo-server-express";

const shared = gql`
  type Date {
    year: Int
    month: Int
    day: Int
  }

  input DateInput {
    year: Int
    month: Int
    day: Int
  }

  type ErrorMessage {
    message: String
    status: Int
  }
`;

export default shared;
