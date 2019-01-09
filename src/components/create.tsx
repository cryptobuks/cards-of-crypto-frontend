import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Paper, Theme, Typography } from "@material-ui/core"

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

interface IProps {}

const Card: React.SFC<IProps> = props => {
  const classes = useStyles({})

  return <Paper className={classes.root} elevation={8} />
}

export default Card
