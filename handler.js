"use strict";
require("dotenv").config();
const moltin = require("./utils/moltin");
const Algolia = require("./utils/algolia");
const format = require("./utils/format");
const indexName = process.env.ALGOLIA_PRODUCT_INDEX;

module.exports.run = async (event, context) => {
  try {
    let products = await moltin.GetProducts(0, []);

    let formattedProducts = await format.addObjectID(products);

    return Algolia.addToAlgoliaIndex(formattedProducts, indexName);
  } catch (e) {
    return e;
  }
};
