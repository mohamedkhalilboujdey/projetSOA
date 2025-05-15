# 🎬 reco-project : Moteur de recommandations personnalisées

Ce projet est une application basée sur une architecture de microservices, intégrant REST, GraphQL, gRPC et Kafka. Elle permet de gérer des utilisateurs, des contenus multimédias et de fournir des recommandations personnalisées.

## 🧱 Architecture

- **user-service** : Gestion des utilisateurs (CRUD, GraphQL, gRPC)
- **content-service** : Gestion des contenus (films, séries)
- **recommendation-service** : Génération de recommandations basées sur les utilisateurs et les contenus
- **api-gateway** : Point d'entrée unique exposant des API REST et GraphQL
- **Kafka** : Communication asynchrone entre les services
- **MongoDB** : Base de données pour stocker les informations des utilisateurs et des contenus

## 🚀 Technologies utilisées

- Node.js
- Express.js
- Apollo Server (GraphQL)
- gRPC avec Protocol Buffers
- Apache Kafka
- MongoDB
- Docker & Docker Compose

## 🧪 Démarrage du projet

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/ton-utilisateur/reco-project.git
   cd reco-project
2.Lancer les services avec Docker Compose
   docker-compose up --build

3.Accéder aux services
  ++API Gateway REST : http://localhost:3000/api

  ++API Gateway GraphQL : http://localhost:3000/graphql

  ++Interface GraphQL Playground : http://localhost:3000/graphql

## 📌 Endpoints principaux 
 REST
   GET /api/users : Liste des utilisateurs

   POST /api/users : Création d'un utilisateur

   GET /api/contents : Liste des contenus

   POST /api/contents : Création d'un contenu 
   
 GraphQL
    query {
  getUser(id: "123") {
    id
    name
    email
  }
 }
 gRPC
   GetUser(user_id) : Récupération des informations d'un utilisateur

   GetContent(content_id) : Récupération des informations d'un contenu

## 🔄 Communication entre microservices
  REST : Communication entre l'API Gateway et les microservices

  GraphQL : Interface unifiée pour les clients

  gRPC : Communication efficace entre les microservices

  Kafka : Échange d'événements entre les services (par exemple, lorsqu'un nouvel  utilisateur est créé)   

## 🗂️ Structure du projet

 reco-project/
 ├── api-gateway/
 ├── user-service/
 ├── content-service/
 ├── recommendation-service/
 ├── kafka/
 ├── proto/
 └── docker-compose.yml  