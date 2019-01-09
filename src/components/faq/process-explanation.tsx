import * as React from "react"
import { List, ListItem, ListItemIcon, ListItemText, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "../common/link"
import Question from "./question"

const useStyles = makeStyles((theme: Theme) => ({
  subList: {
    marginLeft: theme.spacing.unit * 5
  }
}))

const ProcessExplanation = () => {
  const classes = useStyles({})

  return (
    <>
      <Question
        question="Q. I am a nerd. Can you explain to me in a little more detail how Card of Crypto works?"
        answer="A. Welcome nerd. Here is how the process works:"
      />
      <List dense className={classes.subList}>
        <ListItem>
          <ListItemIcon>
            <FontAwesomeIcon icon="caret-right" />
          </ListItemIcon>
          <ListItemText
            secondary={
              <span>
                When we receive an order, we verify and process your payment with Stripe. Once the funds are
                confirmed, we convert your hard earned dollars into the choosen cryptocurrency at the latest
                exchange rate reported by <Link to="https://coinmarketcap.com" text="Coin Market Cap" />.
              </span>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FontAwesomeIcon icon="caret-right" />
          </ListItemIcon>
          <ListItemText secondary="We securly create a new wallet on the blockchain you selected, and send the cryptocurrency you purchased from us to that wallet." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FontAwesomeIcon icon="caret-right" />
          </ListItemIcon>
          <ListItemText secondary="The wallet’s private key is encrypted using the passphrase that was created when designing the card." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FontAwesomeIcon icon="caret-right" />
          </ListItemIcon>
          <ListItemText secondary="The private key is decrypted when your friend opens the card. They can then use this key to claim the funds in the wallet and move them to a secure wallet where the private key has not been exposed." />
        </ListItem>
      </List>
    </>
  )
}

export default ProcessExplanation
