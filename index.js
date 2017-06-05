var config = require('./config');
var moltin = require('./utils/moltin');
var Algolia = require('./utils/algolia')

var AddProducts = function() => {
  moltin.GetProducts()

  .then((products) => {
    var productData = products.data
    Algolia.AddToAlgolia(productData)
  })

  .catch((err) => {
    console.log(err)
  });
};
