require("dotenv").config();
const algoliasearch = require('algoliasearch');
var client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);

var exports = module.exports = {};

exports.addToAlgolia = (Data, indexName) => {
  let index = client.initIndex(indexName);
  
  index.addObjects(Data, function(err, content) {

    if (err) {
      console.error(err);
    }
    else {
      console.log("Your products have been added to Algolia in the index called:", indexName);
    }
  });
};

exports.updateAlgolia = (IndexName, Data) => {
  IndexName.saveObjects(Data, function(err, content) {
    console.log(content);
  });
}
