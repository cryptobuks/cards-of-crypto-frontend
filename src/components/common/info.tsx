import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Paper, Typography, Theme } from "@material-ui/core"
import { green, red, grey } from "@material-ui/core/colors"

const useStyles = makeStyles((theme: Theme) => ({
  error: {
    background: red[50],
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  errorTitle: {
    color: red[900]
  },
  errorText: {
    color: red[500]
  },
  success: {
    background: green[50],
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  successTitle: {
    color: green[900]
  },
  successText: {
    color: green[500]
  },
  default: {
    background: grey[50],
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  defaultTitle: {
    color: grey[900]
  },
  defaultText: {
    color: grey[500]
  }
}))

interface IProps {
  variant?: "error" | "success"
  title?: string
  text: string
}

const Info: React.SFC<IProps> = ({ variant = "default", title, text }) => {
  const classes = useStyles({})
  if (variant === "error")
    return (
      <Paper className={classes.error} elevation={0}>
        {title && (
          <Typography variant="h6" className={classes.errorTitle}>
            {title}
          </Typography>
        )}
        <Typography className={classes.errorText}>{text}</Typography>
      </Paper>
    )
  else if (variant === "success")
    return (
      <Paper className={classes.success} elevation={0}>
        <Typography variant="h6" className={classes.successTitle}>
          {title}
        </Typography>
        <Typography className={classes.successText}>{text}</Typography>
      </Paper>
    )
  else
    return (
      <Paper className={classes.default} elevation={0}>
        <Typography variant="h6" className={classes.defaultTitle}>
          {title}
        </Typography>
        <Typography className={classes.defaultText}>{text}</Typography>
      </Paper>
    )
}

export default Info
