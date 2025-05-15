const Recommendation = require('../models/recommendation');

module.exports = {
  getRecommendation: async ({ userId }) => {
    return await Recommendation.findOne({ userId });
  },
  getAllRecommendations: async () => {
    return await Recommendation.find();
  },
  createRecommendation: async ({ input }) => {
    const newReco = new Recommendation(input);
    return await newReco.save();
  },
  updateRecommendation: async ({ userId, input }) => {
    return await Recommendation.findOneAndUpdate({ userId }, input, { new: true });
  },
  deleteRecommendation: async ({ userId }) => {
    const result = await Recommendation.deleteOne({ userId });
    return result.deletedCount > 0;
  },
};
