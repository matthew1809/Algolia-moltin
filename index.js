require("dotenv").config();
const moltin = require('./utils/moltin');
const Algolia = require('./utils/algolia');
const indexName = process.env.ALGOLIA_PRODUCT_INDEX;

const AddProducts = (indexName) => {
  moltin.GetProducts(0, [])
  .then((products) => {
  	console.log(products);
    Algolia.addToAlgolia(products, indexName);
  })

  .catch((err) => {
    console.log(err)
  });
};

AddProducts(indexName);

