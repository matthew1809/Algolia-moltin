var config = require('../config');

const moltin = require('@moltin/sdk');

var exports = module.exports = {};

const Moltin = moltin.gateway({
   client_id: config.MoltinKeys.client_id,
   client_secret: config.MoltinKeys.client_secret,
 });

exports.GetProducts = function() {
  return Moltin.Products.All()
 };

exports.GetCategories = function() {
  return Moltin.Categories.All()
}

exports.GetBrands = function() {
  return Moltin.Brands.All()
}

exports.GetFile = function(ID) {
  return Moltin.Files.Get(ID)
}

exports.GetCartItems = function() {
  return Moltin.Cart.Items()
}

exports.GetOrders = function() {
  return Moltin.Orders.All()
}
