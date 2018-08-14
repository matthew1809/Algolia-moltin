const moltin = require("@moltin/sdk");
require("dotenv").config();

var exports = (module.exports = {});

const Moltin = moltin.gateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET
});

exports.GetProducts = async function(PageOffsetCounter, productsArray) {
  console.log("PageOffsetCounter is", PageOffsetCounter);

  let products = await Moltin.Products.Sort("created_at")
    .Limit(100)
    .Offset(PageOffsetCounter)
    .All();

  PageOffsetCounter = PageOffsetCounter + 100;

  if (PageOffsetCounter < products.meta.results.all) {
    for (const product of products.data) {
      await productsArray.push(product);
    }

    return exports.GetProducts(PageOffsetCounter, productsArray);
  } else {
    console.log("no more pages left to fetch");

    let productsLeft = products.meta.results.all - (PageOffsetCounter - 100);
    let productsLeftCounter = 0;

    console.log(productsLeft);
    for (const product of products.data) {
      await productsArray.push(product);
      await productsLeftCounter++;
    }

    if (productsLeftCounter === productsLeft) {
      console.log("finished processing");
      return productsArray;
    }
  }
};

exports.GetProductById = function(id) {
  return Moltin.Products.Get(id);
};


