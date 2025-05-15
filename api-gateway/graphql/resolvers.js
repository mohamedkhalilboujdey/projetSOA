const axios = require('axios');
const BASE_URL = 'http://user-service:3001/users';

module.exports = {
  users: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
  createUser: async ({ input }) => {
    const { username, email } = input;
    console.log("📩 Reçu depuis GraphQL :", username, email);
    const response = await axios.post(BASE_URL, { username, email });
    return response.data;
  }
};
