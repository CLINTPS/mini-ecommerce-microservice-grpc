// const express = require('express');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
// const path = require('path');
const { signupUser } = require('../../application/use_cases/signupUser');
const { loginUser } = require('../../application/use_cases/loginUser');
const connectDB = require('../database/db')

const { save, findByEmail } = require('../repositories/userRepository')


const PROTO_PATH =  './src/infrastructure/proto/auth.proto'
const packageDefinition = protoLoader.loadSync(PROTO_PATH,{
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const authProto = grpc.loadPackageDefinition(packageDefinition).auth;

const userRepository = { save, findByEmail }

async function main() {

    connectDB()

    const server = new grpc.Server();
    console.log("Ckeck auth server..........");
    server.addService(authProto.AuthService.service, {
        signup: async (call, callback) => {
            console.log('signup request reached in auth server', call.request)
            try {
                const userData = call.request;
                const newUser = await signupUser(userRepository, userData);
                console.log("🚀 ~ file: authServer.js:36 ~ signup: ~ newUser:", newUser)
                callback(null, { message: 'User registered successfully', userId: newUser._id });
            } catch (error) {
                callback({
                    code: grpc.status.INTERNAL,
                    message: error.message,
                });
            }
        },
        login: async (call, callback) => {
            try {
                console.log('login reached in grpc server', call.request)
                const userData = call.request;
                const { token, user } = await loginUser(userRepository, userData.email);
                callback(null, { token, user });
            } catch (error) {
                callback({
                    code: grpc.status.INTERNAL,
                    message: error.message
                });
            }
        }
    });

    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.error('Server bind error:', err);
        } else {
            console.log('Server running at http://0.0.0.0:50051');
            server.start();
        }
    });
}

main();
