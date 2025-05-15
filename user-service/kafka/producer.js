const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'user-service',
  brokers: ['kafka:9092'], // 💡 broker défini dans docker-compose
});

const producer = kafka.producer();

const sendUserCreatedMessage = async (user) => {
  await producer.connect();
  await producer.send({
    topic: 'user-created',
    messages: [
      {
        value: JSON.stringify({
          id: user._id,
          name: user.name,
          email: user.email,
        }),
      },
    ],
  });
  await producer.disconnect();
};

module.exports = sendUserCreatedMessage;
