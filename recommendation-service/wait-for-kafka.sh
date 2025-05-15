#!/bin/sh
# wait-for-kafka.sh

echo "⏳ Attente de Kafka sur kafka:9092..."

while ! nc -z kafka 9092; do
  sleep 1
done

echo "✅ Kafka est prêt, lancement de l'application..."
node app.js