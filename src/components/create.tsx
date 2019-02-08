import * as React from "react"
import { useState } from "react"
import { graphql, compose, withApollo } from "react-apollo"
import { VIEW_LOCAL_QUERY } from "../helpers/graphql-operations"
// import Steps from "./create/steps"
import { Loading, Error } from "./common/states"
import { ApolloClient } from "apollo-boost"

interface IProps {
  card: Card
  loading: boolean
  error: any
  client: ApolloClient<ApolloCache>
}

const Create: React.SFC<IProps> = ({ card, loading, error, client }) => {
  const [step, setStep] = useState(0)
  const [completed, setCompleted] = useState(new Array(10).fill(false))

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  const updateValue = (key: keyof ApolloCache, value: any) =>
    client.writeData({ data: { local: { [key]: value, __typename: "local" } } })

  const onBack = () => setStep(step - 1)
  const onNext = () => {
    setStepComplete(step)
    setStep(step + 1)
  }

  const setStepComplete = (index: number) => {
    completed[index] = true
    if (index === 7) completed[8] = true
    setCompleted(completed)
  }

  return (
    <div>hi</div>
    // <Steps
    //   card={card}
    //   stepsCompleted={completed}
    //   updateValue={updateValue}
    //   step={step}
    //   setStep={setStep}
    //   onNext={onNext}
    //   onBack={onBack}
    // />
  )
}

const read = graphql(VIEW_LOCAL_QUERY, {
  props: (props: any) => {
    const { loading, data, error } = props
    return {
      card: data.local,
      loading,
      error
    }
  }
})

export default compose(
  read,
  withApollo
)(Create)
