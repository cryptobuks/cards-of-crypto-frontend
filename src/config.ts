const VERSION = require("../package.json").version
const NODE_ENV = process.env.NODE_ENV || "development"
const COMMIT = process.env.CI_COMMIT_SHA || "unknown"
const BRANCH = process.env.CI_COMMIT_REF_NAME || "unknown"

const shared = {
  NODE_ENV,
  VERSION,
  COMMIT,
  BRANCH,
  CARD_PRICE: 500,
  TERMS_AND_CONDITIONS:
    "https://docs.google.com/document/d/e/2PACX-1vSAFTkySv9rSGa_II63nFFPchNZ-sXDS3H67otneKGAB-vW0jZHlESqlrqNvI6KUocgMMOTYJknG4HX/pub",
  DISCLAIMER:
    "https://docs.google.com/document/d/e/2PACX-1vSCqXdVrQqj5ziPtC5qDbMDnHdUxEESNwXg7VuxepnACeqsEWMm42ftU3qVwIgPZhri3g4I-FNeUKa9/pub",
  PRIVACY_POLICY:
    "https://docs.google.com/document/d/e/2PACX-1vSdncJcx5p3_DzB7NT4mipSHq5WQloZ-X34vpQniiSMGVORtGptK2YSFdsVTMyUFKxkgLzd92tfb6s1/pub"
}

const configs = {
  test: {
    ...shared
  },
  development: {
    ...shared,
    BLOCK_EXPLORERS: {
      ETH: "https://ropsten.etherscan.io/tx",
      BTC: "https://live.blockcypher.com/btc-testnet/tx"
    },
    APOLLO_ENDPOINT: "/graphql",
    STRIPE_KEY: "pk_test_csXOqEeaY1JjUHOo1MCJSK6V",
    ETHERSCAN_TRANSACTION: "https://ropsten.etherscan.io/tx"
  },
  staging: {
    ...shared,
    BLOCK_EXPLORERS: {
      ETH: "https://etherscan.io/tx",
      BTC: "https://www.blockchain.com/btc/tx"
    },
    ETHERSCAN_TRANSACTION: "https://etherscan.io/tx",
    STRIPE_KEY: "pk_live_SHnE0DgTlcvXGEbns1ZcE0py",
    APOLLO_ENDPOINT: "/graphql"
  },
  production: {
    ...shared,
    BLOCK_EXPLORERS: {
      ETH: "https://etherscan.io/tx",
      BTC: "https://www.blockchain.com/btc/tx"
    },
    ETHERSCAN_TRANSACTION: "https://etherscan.io/tx",
    STRIPE_KEY: "pk_live_SHnE0DgTlcvXGEbns1ZcE0py",
    APOLLO_ENDPOINT: "/graphql"
  }
}

const activeConfig = <Config>configs[NODE_ENV]
export default activeConfig
