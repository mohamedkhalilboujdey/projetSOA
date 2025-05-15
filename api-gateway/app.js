const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/users');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

app.use(cors());
app.use(express.json());

// Routes REST
app.use('/users', userRoutes);

// GraphQL
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true  // pour activer l'interface visuelle
  }));
  

app.listen(3000, () => {
  console.log('🚀 API Gateway running on port 3000');
});
