const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const mongoose = require('mongoose');
const User = require('../models/User');

const PROTO_PATH = __dirname + '/../../proto/user.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

const server = new grpc.Server();

server.addService(userProto.UserService.service, {
  GetUser: async (call, callback) => {
    try {
      const user = await User.findById(call.request.user_id);
      if (!user) return callback(null, {});
      callback(null, {
        user_id: user.id,
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      callback(error, null);
    }
  }
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log("gRPC server running at http://0.0.0.0:50051");
  server.start();
});
