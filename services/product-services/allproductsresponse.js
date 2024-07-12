// source: src/infrastructure/proto/product.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.products.AllProductsResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.products.ProductData');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.products.AllProductsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.products.AllProductsResponse.repeatedFields_, null);
};
goog.inherits(proto.products.AllProductsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.AllProductsResponse.displayName = 'proto.products.AllProductsResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.products.AllProductsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.products.AllProductsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.products.AllProductsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.AllProductsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.AllProductsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    proto.products.ProductData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.products.AllProductsResponse}
 */
proto.products.AllProductsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.AllProductsResponse;
  return proto.products.AllProductsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.AllProductsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.AllProductsResponse}
 */
proto.products.AllProductsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.products.ProductData;
      reader.readMessage(value,proto.products.ProductData.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.products.AllProductsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.AllProductsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.AllProductsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.AllProductsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.products.ProductData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProductData products = 1;
 * @return {!Array<!proto.products.ProductData>}
 */
proto.products.AllProductsResponse.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.products.ProductData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.products.ProductData, 1));
};


/**
 * @param {!Array<!proto.products.ProductData>} value
 * @return {!proto.products.AllProductsResponse} returns this
*/
proto.products.AllProductsResponse.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.products.ProductData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.products.ProductData}
 */
proto.products.AllProductsResponse.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.products.ProductData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.products.AllProductsResponse} returns this
 */
proto.products.AllProductsResponse.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};


