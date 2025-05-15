const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const contentRoutes = require('./routes/content');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(bodyParser.json());

app.use('/content', contentRoutes);

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}));

mongoose.connect('mongodb://mongo-content:27017/content', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB content');
  app.listen(PORT, () => console.log(`✅ Content service running on port ${PORT}`));
}).catch(err => console.error('❌ MongoDB connection error:', err));
