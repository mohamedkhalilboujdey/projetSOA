const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/../proto/user.proto'; // adapte le chemin si nécessaire
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

const client = new userProto.UserService(
  'localhost:50051', // ou 'user-service:50051' dans Docker
  grpc.credentials.createInsecure()
);

// Tester avec un ID existant
client.GetUser({ user_id: 'ID_UTILISATEUR_EXISTANT' }, (err, response) => {
  if (err) {
    console.error('Erreur gRPC :', err.message);
  } else {
    console.log('Réponse du user-service :', response);
  }
});
