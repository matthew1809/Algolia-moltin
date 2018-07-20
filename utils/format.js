var exports = (module.exports = {});

exports.addObjectID = async products => {
  for (const product of products) {
    product.objectID = product.id;
  }

  return products;
};
