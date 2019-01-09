import * as React from "react"
import EmailUs from "./email-us"
import Link from "./link"
import { Browser } from "react-kawaii"
import { CircularProgress, LinearProgress, Paper, Typography } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { makeStyles } from "@material-ui/styles"
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

interface IPropsError {
  error: any
  componentStack?: any
  inline?: boolean
}

export const Error: React.SFC<IPropsError> = ({ error, inline }) => {
  const classes = useStyles({})
  // console.error(error)
  if (inline)
    return (
      <Typography>
        <FontAwesomeIcon icon="times" />
        &nbsp;&nbsp; Ouch that didn't work! If this problem persists then{" "}
        <Link email to="mailto:hi@cardsofcrypto.com" text="get in touch" />.
      </Typography>
    )

  return (
    <Paper className={classes.root}>
      <Browser size={75} mood="sad" color="red" className={classes.browser} />
      <Typography variant="subtitle2" gutterBottom>
        Opps something went wrong!
      </Typography>
      <Typography>
        If you need help <EmailUs />.
      </Typography>
    </Paper>
  )
}

interface IPropsLoading {
  circular?: boolean
  linear?: boolean
  rest?: any
}

export const Loading: React.SFC<IPropsLoading> = ({ circular, linear, ...rest }) => {
  if (circular) return <CircularProgress {...rest} />
  if (linear) return <LinearProgress />
  else return <span>Loading ...</span>
}
