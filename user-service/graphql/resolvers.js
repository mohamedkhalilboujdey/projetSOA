const User = require('../models/user');

module.exports = {
  getUser: async ({ id }) => await User.findById(id),
  getAllUsers: async () => await User.find(),
  createUser: async ({ input }) => {
    const newUser = new User(input);
    await newUser.save();
    return newUser;
  },
  updateUser: async ({ id, input }) => await User.findByIdAndUpdate(id, input, { new: true }),
  deleteUser: async ({ id }) => {
    await User.findByIdAndDelete(id);
    return true;
  },
};
