const { Kafka } = require('kafkajs');
const Recommendation = require('../models/recommendation');

const kafka = new Kafka({
  clientId: 'recommendation-service',
  brokers: ['kafka:9092'],
});

const consumer = kafka.consumer({ groupId: 'recommendation-group' });

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'user-created', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const user = JSON.parse(message.value.toString());
      console.log('📥 Nouveau message reçu :', user);

      try {
        // 👉 Créer une recommandation par défaut
        const newReco = new Recommendation({
          userId: user.id, // correspond à _id dans Mongo
          recommendations: ['item1', 'item2', 'item3'],
        });

        await newReco.save();
        console.log('✅ Recommandation enregistrée pour userId:', user.id);
      } catch (err) {
        console.error('❌ Erreur lors de la création de la recommandation :', err);
      }
    },
  });
};

module.exports = runConsumer;
