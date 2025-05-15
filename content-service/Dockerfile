# Dockerfile pour content-service
FROM node:18

# Créer le dossier de l’application
WORKDIR /app

# Copier les fichiers package.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l’application
COPY . .

# Exposer le port du service
EXPOSE 3002

# Démarrer l’application
CMD ["node", "app.js"]
