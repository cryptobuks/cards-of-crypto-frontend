import * as React from "react"
import { useState } from "react"
import { Button, Divider, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Inside from "./unlocked/inside"
import Outside from "./unlocked/outside"

const useStyles = makeStyles((theme: Theme) => ({
  controls: {
    textAlign: "center"
  },
  divider: {
    margin: theme.spacing.unit * 2
  }
}))

interface IProps {
  card: Card
  lockCard: () => void
}

const Unlocked: React.SFC<IProps> = ({ card, lockCard }) => {
  const classes = useStyles({})
  const [open, setOpen] = useState(false)

  const Show = open ? Inside : Outside
  return (
    <>
      <Show card={card} />
      <Divider className={classes.divider} />
      <div className={classes.controls}>
        <Button variant="outlined" onClick={lockCard}>
          Lock
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Button variant="contained" color="secondary" onClick={() => setOpen(!open)}>
          {open ? "Back to Cover" : "Open Card"}
        </Button>
      </div>
    </>
  )
}

export default Unlocked
