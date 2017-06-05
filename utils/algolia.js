var config = require('../config');
var algoliasearch = require('algoliasearch');
var client = algoliasearch(config.AlgoliaKeys.AppID, config.AlgoliaKeys.APIKey);

var exports = module.exports = {};

exports.NewClient = (IndexName) => {
  return client.initIndex(IndexName);
};

exports.AddToAlgolia = (Data) => {
    var index = client.initIndex('ProductsIndex');
  index.addObjects(Data, function(err, content) {
    if (err) {
      console.error(err);
    }
    else {
      console.log("Your products have been added to Algolia in the index called: ProductsIndex")
    }
  });
};

exports.UpdateAlgolia = (IndexName, Data) => {
  IndexName.saveObjects(Data, function(err, content) {
    console.log(content);
  });
}
