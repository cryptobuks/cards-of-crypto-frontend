import * as React from "react"
import { useState } from "react"
import { Typography, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Info from "./info"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing.unit
  },
  link: {
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline"
    }
  }
}))

interface IProps {
  children: any
}

const Help: React.SFC<IProps> = ({ children }) => {
  const classes = useStyles({})
  const [show, setShow] = useState(false)

  return (
    <div className={classes.root}>
      <Typography variant="caption">
        <a onClick={() => setShow(!show)} className={classes.link}>
          {show ? "Hide Instructions" : "Show Instructions"}
        </a>
      </Typography>
      {show && <Info text={children} />}
    </div>
  )
}

export default Help
