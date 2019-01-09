import * as React from "react"
import { Query } from "react-apollo"
import dateFns from "date-fns"
import { makeStyles } from "@material-ui/styles"
import { List, Typography, Paper, Theme } from "@material-ui/core"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import Config from "../config"
import { Item } from "./order/item"
import { GET_ORDER_QUERY } from "../helpers/graphql-operations"
import { Error, Loading } from "./common/states"
import { formatFiat, toCanonicalUnit } from "../helpers/utils"
import Link from "./common/link"
import { RouteComponentProps } from "react-router"

const { BLOCK_EXPLORERS } = Config

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto",
    maxWidth: "600px",
    padding: theme.spacing.unit * 2
  }
}))

interface Variables {
  id: string
}

interface Data {
  getOrder: IOrder
}

class GetOrderQuery extends Query<Data, Variables> {}

interface RouterMatchParamsProps {
  id: string
}
const Order: React.SFC<RouteComponentProps<RouterMatchParamsProps>> = props => {
  const classes = useStyles({})
  const { id } = props.match.params

  return (
    <Paper className={classes.root}>
      <GetOrderQuery query={GET_ORDER_QUERY} variables={{ id }}>
        {({ data, loading, error }) => {
          if (error) return <Error error={error} />
          if (loading) return <Loading />

          const {
            createdAt,
            updatedAt,
            valueInFiat,
            id,
            hasBeenOpened,
            token,
            transactionHash,
            coinSymbol,
            coinQuantity
            // @ts-ignore
          } = data.getOrder

          const blockExplorerUrl: string = BLOCK_EXPLORERS[coinSymbol]
          const updated = dateFns.distanceInWords(new Date(), Number(updatedAt))
          const created = dateFns.format(Number(createdAt), "Do [of] MMM YYYY [at] hh:mm")
          const spent = formatFiat(valueInFiat / 100)
          const purchased = toCanonicalUnit(coinSymbol, coinQuantity)
          const icon = getIcon(coinSymbol)

          return (
            <>
              <Typography variant="subtitle2">Order Summary</Typography>
              <List dense>
                <Item icon="receipt" primary={`Your order id is ${id}`} />
                <Item
                  icon="dollar-sign"
                  primary={`You spent ${spent} and gifted ${purchased} ${coinSymbol}`}
                />
                <Item icon="clock" primary={`This order was updated ${updated} ago`} />
                <Item icon="calendar" primary={`This order was created on the ${created}`} />
                <Item
                  icon={hasBeenOpened ? "envelope-open" : "envelope"}
                  primary={hasBeenOpened ? "The card was opened" : "The card has not been opened"}
                />
                <Item icon="link" primary={<Link to={`/card/${token}`} text="View the card" />} />
                <Item
                  icon={icon}
                  primary={
                    <Link
                      to={`${blockExplorerUrl}/${transactionHash}`}
                      text="Click to view blockchain transaction"
                    />
                  }
                />
              </List>
            </>
          )
        }}
      </GetOrderQuery>
    </Paper>
  )
}

const getIcon = (symbol: string): IconProp => {
  switch (symbol) {
    case "BTC": {
      return ["fab", "bitcoin"]
    }
    default: {
      return ["fab", "ethereum"]
    }
  }
}

export default Order
