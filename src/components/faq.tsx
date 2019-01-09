import * as React from "react"
import { Theme, Paper, List, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Question from "./faq/question"
import ProcessExplanation from "./faq/process-explanation"
import EmailUs from "./common/email-us"
import Link from "./common/link"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "700px",
    margin: "auto",
    overflowY: "scroll",
    overflowX: "hidden",
    maxHeight: "calc(100vh - 188px)",
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down("xs")]: {
      maxHeight: "100%",
      padding: theme.spacing.unit
    }
  }
}))

interface IProp {}

const FAQ: React.SFC<IProp> = props => {
  const classes = useStyles({})
  return (
    <Paper className={classes.root}>
      <List>
        <Question
          question="Q. How do I get in touch with you?"
          answer={
            <span>
              A. Simple. E-mail us at <EmailUs />.
            </span>
          }
        />
        <Divider light />
        <Question
          question="Q. Which cryptocurrencies can I send?"
          answer="A. Currently we support Ethereum and Bitcoin. Watch this space and please let us know which ones you would like to see next…"
        />
        <Divider light />
        <Question
          question="Q. What if my friend doesn’t have a wallet?"
          answer="A. We create a wallet for your friend so they don't have to. We give them the secret keys to access that wallet and embed them into the card. However, we don't recommend using this wallet for anything serious and accept no reponsibility if it is used as a general purpose wallet long term."
        />
        <Divider light />
        <Question
          question="Q. Do you issue refunds?"
          answer="A. It is not possible to offer refunds after the card has been sent. By creating the card, you locked a newly created escrow wallet with a passphrase. Therefore, we cannot access the new wallet to issue a refund."
        />
        <Divider light />
        <Question
          question="Q. Which charity are you donating to?"
          answer={
            <span>
              A. We are donating a portion of the fees charged for each Christmas card to{" "}
              <Link external to="https://www.crisis.org.uk/" text="Crisis" />. Crisis are a UK based charity
              that help homeless people rebuild their lives. We will provide an update after Christmas
              confirming our total donation.
            </span>
          }
        />
        <Divider light />
        <ProcessExplanation />
        <Divider light />
        <Question
          question="Is this safe?"
          answer="A. We created Cards of Crypto because we couldn’t find an easy way to gift small amounts of cryptocurrency without knowing a public address first. Our workaround to this problem was to create a temporary escrow wallet for the recipient, and provide them with the private keys – after a passphrase is given. Clearly, there are far more secure ways to send cryptocurrencies from point A to point B. We have deliberately kept the USD value you are able to send low to balance the increased risk associated with our temporary wallet workaround. We believe the level of risk relative to gift amount is equivalent to sending a traditional gift card using the postal service."
        />
      </List>
    </Paper>
  )
}

export default FAQ
