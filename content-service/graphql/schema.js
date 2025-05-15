const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Content {
    id: ID!
    title: String!
    genre: String
    rating: Float
  }

  type Query {
    contents: [Content]
  }

  input ContentInput {
    title: String!
    genre: String
    rating: Float
  }

  type Mutation {
    addContent(contentInput: ContentInput): Content
  }
`);
