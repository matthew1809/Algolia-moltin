var config = require('../config');
var algoliasearch = require('algoliasearch');
var client = algoliasearch(config.AlgoliaKeys.AppID, config.AlgoliaKeys.APIKey);

var exports = module.exports = {};

exports.NewClient = (IndexName) => {
  return client.initIndex(IndexName);
};

exports.AddToAlgolia = (IndexName, Data) => {
  IndexName.addObjects(Data, function(err, content) {
    if (err) {
      console.error(err);
    }
    else {
      console.log(content)
    }
  });
};

exports.UpdateAlgolia = (IndexName, Data) => {
  IndexName.saveObjects(Data, function(err, content) {
    console.log(content);
  });
}
