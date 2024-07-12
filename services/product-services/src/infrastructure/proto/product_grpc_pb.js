// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var src_infrastructure_proto_product_pb = require('../../../src/infrastructure/proto/product_pb.js');

function serialize_products_AddProductRequest(arg) {
  if (!(arg instanceof src_infrastructure_proto_product_pb.AddProductRequest)) {
    throw new Error('Expected argument of type products.AddProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_products_AddProductRequest(buffer_arg) {
  return src_infrastructure_proto_product_pb.AddProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_products_AllProductsResponse(arg) {
  if (!(arg instanceof src_infrastructure_proto_product_pb.AllProductsResponse)) {
    throw new Error('Expected argument of type products.AllProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_products_AllProductsResponse(buffer_arg) {
  return src_infrastructure_proto_product_pb.AllProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_products_GetAllProductsRequest(arg) {
  if (!(arg instanceof src_infrastructure_proto_product_pb.GetAllProductsRequest)) {
    throw new Error('Expected argument of type products.GetAllProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_products_GetAllProductsRequest(buffer_arg) {
  return src_infrastructure_proto_product_pb.GetAllProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_products_GetSingleProductRequest(arg) {
  if (!(arg instanceof src_infrastructure_proto_product_pb.GetSingleProductRequest)) {
    throw new Error('Expected argument of type products.GetSingleProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_products_GetSingleProductRequest(buffer_arg) {
  return src_infrastructure_proto_product_pb.GetSingleProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_products_ProductData(arg) {
  if (!(arg instanceof src_infrastructure_proto_product_pb.ProductData)) {
    throw new Error('Expected argument of type products.ProductData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_products_ProductData(buffer_arg) {
  return src_infrastructure_proto_product_pb.ProductData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_products_ProductResponse(arg) {
  if (!(arg instanceof src_infrastructure_proto_product_pb.ProductResponse)) {
    throw new Error('Expected argument of type products.ProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_products_ProductResponse(buffer_arg) {
  return src_infrastructure_proto_product_pb.ProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductsServiceService = exports.ProductsServiceService = {
  // add product
addProduct: {
    path: '/products.ProductsService/AddProduct',
    requestStream: false,
    responseStream: false,
    requestType: src_infrastructure_proto_product_pb.AddProductRequest,
    responseType: src_infrastructure_proto_product_pb.ProductResponse,
    requestSerialize: serialize_products_AddProductRequest,
    requestDeserialize: deserialize_products_AddProductRequest,
    responseSerialize: serialize_products_ProductResponse,
    responseDeserialize: deserialize_products_ProductResponse,
  },
  // get allproducts
getAllProducts: {
    path: '/products.ProductsService/GetAllProducts',
    requestStream: false,
    responseStream: false,
    requestType: src_infrastructure_proto_product_pb.GetAllProductsRequest,
    responseType: src_infrastructure_proto_product_pb.AllProductsResponse,
    requestSerialize: serialize_products_GetAllProductsRequest,
    requestDeserialize: deserialize_products_GetAllProductsRequest,
    responseSerialize: serialize_products_AllProductsResponse,
    responseDeserialize: deserialize_products_AllProductsResponse,
  },
  // get single product
getSingleProduct: {
    path: '/products.ProductsService/GetSingleProduct',
    requestStream: false,
    responseStream: false,
    requestType: src_infrastructure_proto_product_pb.GetSingleProductRequest,
    responseType: src_infrastructure_proto_product_pb.ProductData,
    requestSerialize: serialize_products_GetSingleProductRequest,
    requestDeserialize: deserialize_products_GetSingleProductRequest,
    responseSerialize: serialize_products_ProductData,
    responseDeserialize: deserialize_products_ProductData,
  },
};

exports.ProductsServiceClient = grpc.makeGenericClientConstructor(ProductsServiceService);
