// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var src_infrastructure_proto_auth_pb = require('../../../src/infrastructure/proto/auth_pb.js');

function serialize_auth_loginRequest(arg) {
  if (!(arg instanceof src_infrastructure_proto_auth_pb.loginRequest)) {
    throw new Error('Expected argument of type auth.loginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_loginRequest(buffer_arg) {
  return src_infrastructure_proto_auth_pb.loginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_loginResponse(arg) {
  if (!(arg instanceof src_infrastructure_proto_auth_pb.loginResponse)) {
    throw new Error('Expected argument of type auth.loginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_loginResponse(buffer_arg) {
  return src_infrastructure_proto_auth_pb.loginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_signupRequest(arg) {
  if (!(arg instanceof src_infrastructure_proto_auth_pb.signupRequest)) {
    throw new Error('Expected argument of type auth.signupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_signupRequest(buffer_arg) {
  return src_infrastructure_proto_auth_pb.signupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_signupResponse(arg) {
  if (!(arg instanceof src_infrastructure_proto_auth_pb.signupResponse)) {
    throw new Error('Expected argument of type auth.signupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_signupResponse(buffer_arg) {
  return src_infrastructure_proto_auth_pb.signupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  // send user signup request
signup: {
    path: '/auth.AuthService/signup',
    requestStream: false,
    responseStream: false,
    requestType: src_infrastructure_proto_auth_pb.signupRequest,
    responseType: src_infrastructure_proto_auth_pb.signupResponse,
    requestSerialize: serialize_auth_signupRequest,
    requestDeserialize: deserialize_auth_signupRequest,
    responseSerialize: serialize_auth_signupResponse,
    responseDeserialize: deserialize_auth_signupResponse,
  },
  // send user login request
login: {
    path: '/auth.AuthService/login',
    requestStream: false,
    responseStream: false,
    requestType: src_infrastructure_proto_auth_pb.loginRequest,
    responseType: src_infrastructure_proto_auth_pb.loginResponse,
    requestSerialize: serialize_auth_loginRequest,
    requestDeserialize: deserialize_auth_loginRequest,
    responseSerialize: serialize_auth_loginResponse,
    responseDeserialize: deserialize_auth_loginResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
