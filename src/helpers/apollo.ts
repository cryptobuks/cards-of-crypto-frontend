import ApolloClient from "apollo-boost"
import Config from "../config"

const { APOLLO_ENDPOINT } = Config

// let local = {
//   from: "",
//   to: "",
//   valueInFiat: 1250,
//   coinQuantity: 0,
//   coinSymbol: "ETH",
//   image: "static/images/cards/card1.png",
//   title: "",
//   message: "",
//   question: "",
//   answer: "",
//   answerConfirm: "",
//   unlockedDate: "2008-10-31",
//   hasUnlockedDate: false,
//   termsAgreed: false,
//   previewSeen: false,
//   privateKey: "0AD8ECC4CF8C8228CA902608156F6C128Z3C906334144B08BDCFB238A0388ADB",
//   ethAddress: "0x4ab65e00943b9035b85712da01c63c4d069b65f5",
//   mnemonic:
//     "rare monster grid march expect injury fox theme material street sorry output armor dismiss canyon",
//   btcAddress: "18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX",
//   wif: "cTur4LKy2iNxKDRPvmNA8rvaeUaUUa2ThuEf7aJ5iEQPkF5sZ49V",
//   __typename: "local"
// }

const defaults = {
  tempCard: {
    from: "",
    to: "",
    coinQuantity: 0,
    coinSymbol: "ETH",
    image: "static/images/cards/card1.png",
    title: "",
    message: "",
    valueInFiat: 1250,
    // answerConfirm: "",
    // hasUnlockedDate: false,
    // termsAgreed: false,
    // previewSeen: false,
    // wallet: {
    //   privateKey: "0AD8ECC4CF8C8228CA902608156F6C128Z3C906334144B08BDCFB238A0388ADB",
    //   ethAddress: "0x4ab65e00943b9035b85712da01c63c4d069b65f5",
    //   mnemonic:
    //     "rare monster grid march expect injury fox theme material street sorry output armor dismiss canyon",
    //   btcAddress: "18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX",
    //   wif: "cTur4LKy2iNxKDRPvmNA8rvaeUaUUa2ThuEf7aJ5iEQPkF5sZ49V",
    //   __typename: "wallet"
    // },
    __typename: "tempCard"
  }
}

const typeDefs = `
`

const client = new ApolloClient({
  uri: APOLLO_ENDPOINT,
  clientState: {
    resolvers: {},
    defaults,
    typeDefs
  }
})

export default client
