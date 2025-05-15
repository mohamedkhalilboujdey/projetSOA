const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const runConsumer = require('./kafka/consumer');
const recoRoutes = require('./routes/recommendation');

const app = express();
const PORT = 3003;

app.use(cors());
app.use(bodyParser.json());
app.use('/reco', recoRoutes);
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  }));

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB recommendation');

  // Lancer le consumer Kafka
  runConsumer().catch(err => {
    console.error('❌ Erreur dans le consumer Kafka:', err);
  });

  app.listen(PORT, () => console.log(`✅ Recommendation service running on port ${PORT}`));
}).catch(err => console.error('❌ MongoDB connection error:', err));
