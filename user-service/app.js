const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');


const userRoutes = require('./routes/users');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes); // <== ✅ monte les routes ici
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true, // interface pour tester
  }));
mongoose.connect('mongodb://mongo-user:27018/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => console.log(`✅ User service running on port ${PORT}`));
}).catch((err) => console.error('❌ MongoDB connection error:', err));

  