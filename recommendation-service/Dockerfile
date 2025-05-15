FROM node:18

# Créer le dossier app
WORKDIR /app

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers
COPY . .

# ✅ Installer netcat
RUN apt-get update && apt-get install -y netcat-openbsd

# Copier le script d’attente
COPY wait-for-kafka.sh /wait-for-kafka.sh
RUN chmod +x /wait-for-kafka.sh

# ✅ Lancer le script puis l'app
CMD ["/wait-for-kafka.sh", "node", "app.js"]
