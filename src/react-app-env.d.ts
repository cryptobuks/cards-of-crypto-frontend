/// <reference types="react-scripts" />

declare module "react-kawaii"

declare type ApolloCache = {
  // TODO: refactor the local cache
  from: string
  to: string
  title: string
  message: string
  valueInFiat: number
  coinSymbol: string
  coinQuantity: number
  image: string
  question: string
  answer: string
  answerConfirm: string
  unlockedDate: string
  hasUnlockedDate: boolean
  termsAgreed: boolean
  previewSeen: boolean
  privateKey: string
  ethAddress: string
  mnemonic: string
  btcAddress: string
  wif: string
}

interface Window {
  dataLayer: any[]
}

interface ILinkQueryParams {
  id?: string
}

interface IOrder {
  createdAt: string
  updatedAt: string
  valueInFiat: number
  id: string
  hasBeenOpened: string
  token: string
  transactionHash: string
  coinSymbol: keyof ICoinSymbols
  coinQuantity: number
}

interface Config {
  NODE_ENV: string
  VERSION: string
  COMMIT: string
  BRANCH: string
  CARD_PRICE: number
  TERMS_AND_CONDITIONS: string
  DISCLAIMER: string
  PRIVACY_POLICY: string
  APOLLO_ENDPOINT: string
  STRIPE_KEY: string
  ETHERSCAN_TRANSACTION: string
  BLOCK_EXPLORERS: ICoinSymbols
}

interface Card {
  from: string
  to: string
  coinQuantity: string
  coinSymbol: keyof ICoinSymbols
  image: string
  title: string
  message: string
  wallet: IWallet
}

interface ICoinSymbols {
  ETH: string
  BTC: string
}

interface IWallet {
  address: string
  privateKey?: string
  mnemonic?: string
  wif?: string
}
