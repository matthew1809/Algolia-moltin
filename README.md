# Moltin & Algolia integration

## Status
Work In Progress
- no working functionality

## Base functionality:
ToDo

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
Will sync your moltin data with Algolia each time it's run.
