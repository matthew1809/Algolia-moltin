# Moltin & Algolia integration

## Status
- Functional

## Base functionality:
Adds moltin products to a new Algolia index defined in your env.

Every 24 hours, updates those products and adds new products.

Matches products in Moltin to those in Algolia on the Moltin product ID.

## Requirements:
1. Algolia account, [sign up here](https://www.algolia.com/users/sign_up)
2. Moltin account, [sign up here](https://accounts.moltin.com/register)
3. Serverless account, [sign up here](https://dashboard.serverless.com/)

Rename `.example.env` to `.env` and fill in the required values`

## Deploying
Built to be deployed using the serverless framework, configured for AWS.

To deploy, make sure you have your AWS creds configured https://serverless.com/framework/docs/providers/aws/guide/credentials#amazon-web-services

Ensure `serverless.yml` is set up as you want it.

`cd` to project root and run `serverless deploy`.
