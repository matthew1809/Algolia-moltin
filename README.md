# Moltin & Algolia integration

## Status
- Functional

## Base functionality:
Adds moltin products to a new Algolia index called `ProductsIndex`

## Requirements:
Algolia account, [sign up here](https://www.algolia.com/users/sign_up)
Moltin account, [sign up here](https://accounts.moltin.com/register)

Config file at root containing keys for moltin and Algolia, as follows with the empty strings filled in:
```
var exports = module.exports = {};

exports.AlgoliaKeys = {
  APIKey: '',
  AppID: ''
}
exports.MoltinKeys = {
  client_id: '',
  client_secret: ''
}
```

## Behaviour
- Will sync your moltin products with Algolia each time it's run.
- The index name is hardcoded in `utils/algolia.js` on line 12 (within `index` variable)
- N.B. Will not replace your products if run multiple times, instead it will add them again

# Running Instructions
- `node index.js`
