import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "center"
  },
  image: {
    maxHeight: "400px",
    maxWidth: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  }
}))

interface IProps {
  card: Card
}

const Outside: React.SFC<IProps> = props => {
  const { image, title } = props.card
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <img src={image} alt="card-front-image" className={classes.image} />
      <Typography variant="h6">{title}</Typography>
    </div>
  )
}

export default Outside
