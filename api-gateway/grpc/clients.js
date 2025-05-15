// À compléter après la création du fichier .proto
// Exemple de squelette de client gRPC

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync("user.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObject.userPackage;

const client = new userPackage.UserService(
  "user-service:50051",
  grpc.credentials.createInsecure()
);

// Exemple d'appel
client.GetUser({ id: "123" }, (err, response) => {
  if (err) console.error(err);
  else console.log("User:", response);
});
