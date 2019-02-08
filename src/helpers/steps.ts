export const validEmail = (email: string): boolean => {
  const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/)
  return emailRegExp.test(email)
}

const step1ContactDetails = (card: ApolloCache): boolean => {
  const { from, to } = card
  return validEmail(from) && validEmail(to)
}

const step2Message = (card: ApolloCache): boolean => {
  const { title, message } = card
  return title.length > 0 && message.length > 0
}

const step3Gift = (card: ApolloCache): boolean => {
  const { valueInFiat, coinSymbol } = card
  return valueInFiat >= 500 && valueInFiat <= 2500 && coinSymbol.length > 0
}

const step4Image = (card: ApolloCache): boolean => {
  const { image } = card
  return image.length > 0
}

const step5UnlockDate = (card: ApolloCache): boolean => {
  const { unlockedDate } = card
  return new Date(unlockedDate).toString() !== "Invalid Date"
}

const step6PreviewCard = (card: ApolloCache): boolean => {
  const { previewSeen } = card
  return previewSeen
}

const step7Passphrase = (card: ApolloCache): boolean => {
  const { question, answer, answerConfirm } = card
  return question.length > 0 && answer.length > 6 && answer === answerConfirm
}

const step8TermsAgreed = (card: ApolloCache): boolean => {
  const { termsAgreed } = card
  return termsAgreed
}

type stepFinishedFunction = (card: ApolloCache) => boolean

export const isStepCompleted = (index: number, card: any): boolean => {
  const steps: stepFinishedFunction[] = [
    step1ContactDetails,
    step2Message,
    step3Gift,
    step4Image,
    step5UnlockDate,
    step6PreviewCard,
    step7Passphrase,
    step8TermsAgreed
  ]

  return steps[index](card)
}

export const cardComplete = (card: ApolloCache): boolean => {
  return (
    step1ContactDetails(card) &&
    step2Message(card) &&
    step3Gift(card) &&
    step4Image(card) &&
    step5UnlockDate(card) &&
    step6PreviewCard(card) &&
    step7Passphrase(card) &&
    step8TermsAgreed(card)
  )
}
