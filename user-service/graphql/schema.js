const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  input UserInput {
    username: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User]
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): Boolean
  }
`);
