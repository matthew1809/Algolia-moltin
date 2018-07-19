# Moltin & Algolia integration

## Status
- Functional

## Base functionality:
Adds moltin products to a new Algolia index defined in your env

## Requirements:
Algolia account, [sign up here](https://www.algolia.com/users/sign_up)
Moltin account, [sign up here](https://accounts.moltin.com/register)

Rename `.example.env` to `.env` and fill in the required values`

## Behaviour
- Will sync your moltin products with Algolia each time it's run.
- N.B. Will not replace your products if run multiple times, instead it will add them again

# Running Instructions
- `npm start`
