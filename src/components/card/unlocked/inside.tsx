import * as React from "react"
import { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import { Button, Typography, Theme } from "@material-ui/core"
import ClaimGift from "./inside/claim-gift"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: "'Gamja Flower', 'Roboto'"
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "150px",
    float: "right"
  },
  flex: {},
  title: {
    fontSize: "2.5rem",
    fontWeight: 600
  },
  message: {
    fontSize: "1.5rem",
    marginBottom: theme.spacing.unit,
    minHeight: "150px",
    whiteSpace: "pre-wrap"
  }
}))

interface IProps {
  card: Card
}

const Inside: React.SFC<IProps> = props => {
  const { title, message, coinQuantity, coinSymbol, wallet } = props.card
  const classes = useStyles({})
  const [showGift, setShowGift] = useState(false)

  return (
    <div className={classes.root}>
      <span className={classes.title}>{title}</span>
      <img src="./static/images/cards/inside-card.png" className={classes.image} />
      <div className={classes.message}>
        <Typography variant="body1">{message}</Typography>
      </div>
      <div>
        {showGift ? (
          <ClaimGift coinQuantity={coinQuantity} coinSymbol={coinSymbol} wallet={wallet} />
        ) : (
          <Button variant="contained" color="primary" size="small" onClick={() => setShowGift(true)}>
            Open Gift🎁
          </Button>
        )}
      </div>
    </div>
  )
}

export default Inside
