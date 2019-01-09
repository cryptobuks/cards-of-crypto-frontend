import gql from "graphql-tag"

export const PURCHASE_CARD_MUTATION = gql`
  mutation PURCHASE_CARD_MUTATION($meta: OrderMetaInput!, $card: OrderCardInput!) {
    purchaseCard(meta: $meta, card: $card)
  }
`

export const VIEW_LOCAL_QUERY = gql`
  query VIEW_LOCAL_QUERY {
    local @client {
      from @client
      to @client
      valueInFiat @client
      coinQuantity @client
      coinSymbol @client
      image @client
      title @client
      message @client
      question @client
      answer @client
      answerConfirm @client
      unlockedDate @client
      hasUnlockedDate @client
      termsAgreed @client
      previewSeen @client
      ethAddress @client
      privateKey @client
      mnemonic @client
      btcAddress @client
      wif @client
    }
  }
`

export const GET_COINS_QUERY = gql`
  query GET_COINS_QUERY {
    getCoins {
      name
      symbol
      rate
    }
  }
`

export const GET_ORDER_QUERY = gql`
  query GET_ORDER_QUERY($id: String!) {
    getOrder(id: $id) {
      id
      transactionHash
      hasBeenOpened
      valueInFiat
      createdAt
      updatedAt
      token
      coinSymbol
      coinQuantity
    }
  }
`

export const GET_CARD_SECURITY_QUESTION_QUERY = gql`
  query GET_CARD_SECURITY_QUESTION_QUERY($token: String!) {
    getCardSecurityQuestion(token: $token) {
      question
      unlockedDate
    }
  }
`

export const GET_CARD_QUERY = gql`
  query GET_CARD_SECURITY_QUESTION_QUERY($token: String!, $answer: String!) {
    getCard(token: $token, answer: $answer) {
      from
      to
      coinQuantity
      coinSymbol
      image
      title
      message
      wallet {
        address
        privateKey
        mnemonic
        wif
      }
    }
  }
`
