const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.resolve(__dirname, '../../proto/user.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const userProto = grpc.loadPackageDefinition(packageDefinition).userPackage;

const users = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" }
];

function GetUser(call, callback) {
  const user = users.find(u => u.id === call.request.id);
  if (user) callback(null, user);
  else callback(new Error("User not found"));
}

const server = new grpc.Server();
server.addService(userProto.UserService.service, { GetUser });

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
  console.log("🚀 gRPC UserService running on port 50051");
  server.start();
});
