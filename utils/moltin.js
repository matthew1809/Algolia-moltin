const moltin = require('@moltin/sdk');
require("dotenv").config();

var exports = module.exports = {};

const Moltin = moltin.gateway({
   client_id: process.env.MOLTIN_CLIENT_ID,
   client_secret: process.env.MOLTIN_CLIENT_SECRET
 });

exports.GetProducts = function(PageOffsetCounter, productsArray) {
  return new Promise(function(resolve, reject) {
    console.log("PageOffsetCounter is", PageOffsetCounter);

    Moltin.Products.Sort("created_at")
      .Limit(100)
      .Offset(PageOffsetCounter)
      .All()
      .then(products => {
        PageOffsetCounter = PageOffsetCounter + 100;

        if (PageOffsetCounter < products.meta.results.all) {
          products.data.forEach(function(product) {
            productsArray.push(product);
          });

          return exports.GetProducts(PageOffsetCounter, productsArray);
        } else {
          console.log("no more pages left to fetch");

          let productsLeft = products.meta.results.all - (PageOffsetCounter-100);
          let productsLeftCounter = 0;

          console.log(productsLeft);
            products.data.forEach(function(product) {
             productsArray.push(product);
              productsLeftCounter++
           });
          
          if(productsLeftCounter === productsLeft) {
            console.log("finished processing");
            return Promise.resolve(productsArray);
          }
        }
      })
      .then(products => resolve(products))
      .catch(e => {
        console.log(e);
        reject(e);
      });
  });
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
