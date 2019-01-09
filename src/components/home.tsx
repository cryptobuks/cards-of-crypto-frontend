import * as React from "react"
import Spacer from "./common/spacer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { makeStyles } from "@material-ui/styles"
import { Paper, Theme, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto auto",
    marginTop: "100px",
    marginBottom: "100px",
    maxWidth: "800px",
    padding: theme.spacing.unit * 4
  },
  arrow: {
    marginRight: "20px"
  }
}))

const Home = () => {
  const classes = useStyles({})

  const circle = <FontAwesomeIcon icon="long-arrow-alt-right" size="xs" className={classes.arrow} />

  return (
    <Paper className={classes.root} square>
      <Typography variant="h5" gutterBottom>
        Hello 2019,
      </Typography>
      <Typography gutterBottom>
        {circle}
        Firstly, thank you to everyone for the positive reception of Cards of Crypto! December was exciting
        and we're stoked by how well recieved the site has been.
      </Typography>
      <Typography gutterBottom>
        {circle}
        Sadly Stripe, our card processing partner, dropped us over the holidays because they don't support
        payments for cryptocurrency. This means we cannot process new orders until we have time to move to a
        new payment provider. We will be doing this over the next week or so.
      </Typography>
      <Typography gutterBottom>{circle}Best wishes for 2019</Typography>
      <Spacer vertical size="40" />
      <Typography>
        <em>Cards Of Crypto (aka Broadhaven)</em>
      </Typography>
    </Paper>
  )
}

export default Home
