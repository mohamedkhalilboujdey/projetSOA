const Content = require('../models/content');

module.exports = {
  contents: async () => {
    return await Content.find();
  },
  addContent: async ({ contentInput }) => {
    const content = new Content(contentInput);
    return await content.save();
  }
};
