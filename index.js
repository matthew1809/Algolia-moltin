const moltin = require('./utils/moltin');
const Algolia = require('./utils/algolia');

const AddProducts = () => {
  moltin.GetProducts(0, [])
  .then((products) => {
  	console.log(products);
    Algolia.addToAlgolia(products, 'productsIndex')
  })

  .catch((err) => {
    console.log(err)
  });
};

AddProducts();
