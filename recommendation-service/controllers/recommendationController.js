const grpcClient = require('../grpc/client');

exports.getRecommendation = (req, res) => {
  const userId = req.params.userId;

  grpcClient.GetUser({ user_id: userId }, (err, userData) => {
    if (err) {
      console.error("gRPC error:", err);
      return res.status(500).json({ error: "Failed to retrieve user data" });
    }

    // Utiliser userData.name, userData.email pour générer une recommandation personnalisée
    res.json({
      message: `Recommandation personnalisée pour ${userData.name}`,
      user: userData
    });
  });
};
