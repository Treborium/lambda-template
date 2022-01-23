# AWS Lambda Template

Project template to quickly get started with a new AWS Lambda project 🚀

## Tech Stack

- [TypeScript]()
- [Jest]()
- [Yarn]()
- [CI/CD with GitHub Actions]()
- [Git hooks with Husky]()
- [Prettier]()
- [Dotenv]()

## Getting Started

This template comes with many useful technologies already pre-configured ⚙️
In same cases there is still minimal configuration required to make it work for you.

### 1. Remove `.git`

To have a clean Git history it's recommended to delete `.git/` folder and re-init Git:

```sh
rm -rf .git
git init
```

### 2. Update `package.json`

Reconfigure the `package.json` file by running:

```sh
yarn init
```

### 3. Reference Your Lambda Function

There are some places where you need to reference your own Lambda function.
Simply search the whole project for `LAMBDA_FUNCTION_NAME` and replace all occurrences with the name of your Lambda function.

### 4. Setup Continous Delivery

In order for CD to work you not only need to update `LAMBDA_FUNCTION_NAME` in `.github/workflows/cd.yml` but you also need to set some environment variables in your GitHub repository.

The following environment variables are required (see [link](https://github.com/appleboy/lambda-action) for more information):

- `AWS_REGION`
- `AWS_ACCESS_KEY_ID`
- `AWS_ACCESS_KEY_ID`

## Install Dependencies

```sh
yarn install
```

## Run Unit Tests

```sh
yarn test
```

## Deploy Lambda Function to AWS

```sh
yarn deploy
```
