// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var src_infrastructure_proto_cart_pb = require('../../../src/infrastructure/proto/cart_pb.js');

function serialize_cart_AddToCartRequest(arg) {
  if (!(arg instanceof src_infrastructure_proto_cart_pb.AddToCartRequest)) {
    throw new Error('Expected argument of type cart.AddToCartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cart_AddToCartRequest(buffer_arg) {
  return src_infrastructure_proto_cart_pb.AddToCartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cart_AddToCartResponse(arg) {
  if (!(arg instanceof src_infrastructure_proto_cart_pb.AddToCartResponse)) {
    throw new Error('Expected argument of type cart.AddToCartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cart_AddToCartResponse(buffer_arg) {
  return src_infrastructure_proto_cart_pb.AddToCartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cart_GetCartRequest(arg) {
  if (!(arg instanceof src_infrastructure_proto_cart_pb.GetCartRequest)) {
    throw new Error('Expected argument of type cart.GetCartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cart_GetCartRequest(buffer_arg) {
  return src_infrastructure_proto_cart_pb.GetCartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cart_RemoveRequest(arg) {
  if (!(arg instanceof src_infrastructure_proto_cart_pb.RemoveRequest)) {
    throw new Error('Expected argument of type cart.RemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cart_RemoveRequest(buffer_arg) {
  return src_infrastructure_proto_cart_pb.RemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cart_RemoveResponse(arg) {
  if (!(arg instanceof src_infrastructure_proto_cart_pb.RemoveResponse)) {
    throw new Error('Expected argument of type cart.RemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cart_RemoveResponse(buffer_arg) {
  return src_infrastructure_proto_cart_pb.RemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cart_UserCartResponse(arg) {
  if (!(arg instanceof src_infrastructure_proto_cart_pb.UserCartResponse)) {
    throw new Error('Expected argument of type cart.UserCartResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cart_UserCartResponse(buffer_arg) {
  return src_infrastructure_proto_cart_pb.UserCartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CartServiceService = exports.CartServiceService = {
  // Add to cart
addToCart: {
    path: '/cart.CartService/AddToCart',
    requestStream: false,
    responseStream: false,
    requestType: src_infrastructure_proto_cart_pb.AddToCartRequest,
    responseType: src_infrastructure_proto_cart_pb.AddToCartResponse,
    requestSerialize: serialize_cart_AddToCartRequest,
    requestDeserialize: deserialize_cart_AddToCartRequest,
    responseSerialize: serialize_cart_AddToCartResponse,
    responseDeserialize: deserialize_cart_AddToCartResponse,
  },
  // Remove from cart
removeFromCart: {
    path: '/cart.CartService/RemoveFromCart',
    requestStream: false,
    responseStream: false,
    requestType: src_infrastructure_proto_cart_pb.RemoveRequest,
    responseType: src_infrastructure_proto_cart_pb.RemoveResponse,
    requestSerialize: serialize_cart_RemoveRequest,
    requestDeserialize: deserialize_cart_RemoveRequest,
    responseSerialize: serialize_cart_RemoveResponse,
    responseDeserialize: deserialize_cart_RemoveResponse,
  },
  // Get cart products by user ID
getUserCartProducts: {
    path: '/cart.CartService/GetUserCartProducts',
    requestStream: false,
    responseStream: false,
    requestType: src_infrastructure_proto_cart_pb.GetCartRequest,
    responseType: src_infrastructure_proto_cart_pb.UserCartResponse,
    requestSerialize: serialize_cart_GetCartRequest,
    requestDeserialize: deserialize_cart_GetCartRequest,
    responseSerialize: serialize_cart_UserCartResponse,
    responseDeserialize: deserialize_cart_UserCartResponse,
  },
};

exports.CartServiceClient = grpc.makeGenericClientConstructor(CartServiceService);
