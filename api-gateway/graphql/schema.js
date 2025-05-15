const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID
    name: String
    email: String
  }

  input UserInput {
    name: String!
    email: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(input: UserInput!): User
  }
`);
