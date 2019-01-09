import * as React from "react"
import EmailUs from "../components/common/email-us"
import { Browser } from "react-kawaii"
import { makeStyles } from "@material-ui/styles"
import { Paper, Typography } from "@material-ui/core"
import { RouteComponentProps } from "react-router"
import { Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto auto",
    maxWidth: "600px",
    padding: theme.spacing.unit * 2
  },
  browser: {
    textAlign: "center",
    marginBottom: theme.spacing.unit * 2
  }
}))

interface RouterMatchParamsProps {}

const UnknownRoute: React.SFC<RouteComponentProps<RouterMatchParamsProps>> = props => {
  const classes = useStyles({})

  return (
    <Paper className={classes.root}>
      <Browser size={75} mood="sad" color="red" className={classes.browser} />
      <Typography variant="subtitle2" gutterBottom>
        Opps we can't find that URL!
      </Typography>
      <Typography>
        If you need help <EmailUs />.
      </Typography>
    </Paper>
  )
}

export default UnknownRoute
