const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Recommendation {
    id: ID!
    userId: String!
    recommendations: [String!]!
  }

  input RecommendationInput {
    userId: String!
    recommendations: [String!]!
  }

  type Query {
    getRecommendation(userId: String!): Recommendation
    getAllRecommendations: [Recommendation]
  }

  type Mutation {
    createRecommendation(input: RecommendationInput): Recommendation
    updateRecommendation(userId: String!, input: RecommendationInput): Recommendation
    deleteRecommendation(userId: String!): Boolean
  }
`);
