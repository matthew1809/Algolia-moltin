# Moltin & Algolia integration

## Status
- Functional

## Base functionality:
Adds moltin products to a new Algolia index defined in your env
Every 24 hours, updates those products and adds new products

## Requirements:
Algolia account, [sign up here](https://www.algolia.com/users/sign_up)
Moltin account, [sign up here](https://accounts.moltin.com/register)
Serverless account, [sign up here](https://dashboard.serverless.com/)

Rename `.example.env` to `.env` and fill in the required values`

## Behaviour
- Will sync your moltin products with Algolia each time it's run.
- N.B. Will not replace your products if run multiple times, instead it will add them again

## Deploying
Built to be deployed using the serverless framework, configured for AWS.

To deploy, make sure you have your AWS creds configured https://serverless.com/framework/docs/providers/aws/guide/credentials#amazon-web-services

Ensure `serverless.yml` is set up as you want it.

`cd` to project root and run `serverless deploy`.
