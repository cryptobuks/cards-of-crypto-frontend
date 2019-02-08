import * as React from "react"
import { useState } from "react"
import { Query, withApollo } from "react-apollo"
import { GET_CARD_SECURITY_QUESTION_QUERY, GET_CARD_QUERY } from "../helpers/graphql-operations"
import { Error, Loading } from "./common/states"
import Locked from "./card/locked"
import Unlocked from "./card/unlocked"
import { makeStyles } from "@material-ui/styles"
import { Paper, Theme } from "@material-ui/core"
import { ApolloClient } from "apollo-boost"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "600px",
    margin: "auto",
    padding: theme.spacing.unit * 4,
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: theme.spacing.unit
    }
  }
}))

interface IProps {
  match: {
    params: {
      token: string
    }
  }
  client: ApolloClient<ApolloCache>
}

const Card: React.SFC<IProps> = ({ match, client }) => {
  const { token } = match.params
  const classes = useStyles({})
  const [wrongAnswer, setWrongAnswer] = useState(false)
  const [card, setCard] = useState<Card | undefined>(undefined)

  const onSubmit = async (answer: string) => {
    try {
      const result = await client.query<{ getCard: Card }>({
        query: GET_CARD_QUERY,
        variables: { token, answer }
      })
      setCard(result.data.getCard)
    } catch (error) {
      console.error(error)
      setWrongAnswer(true)
    }
  }

  return (
    <Paper className={classes.root} elevation={8}>
      <Query query={GET_CARD_SECURITY_QUESTION_QUERY} variables={{ token }}>
        {({ data, loading, error }) => {
          if (loading) return <Loading linear />
          if (error) return <Error error={error} />

          const { question, unlockedDate } = data.getCardSecurityQuestion

          if (card) return <Unlocked card={card} lockCard={() => setCard(undefined)} />

          return (
            <Locked unlockedDate={unlockedDate} question={question} onSubmit={onSubmit} error={wrongAnswer} />
          )
        }}
      </Query>
    </Paper>
  )
}

export default withApollo(Card)
