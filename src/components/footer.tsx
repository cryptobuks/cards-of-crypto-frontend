import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Theme } from "@material-ui/core"
import IconLink from "./common/icon-link"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 1000,
    position: "fixed",
    display: "flex",
    bottom: "0px",
    width: "100%",
    textAlign: "center",
    background: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.error.main}`
  }
}))

const Footer = () => {
  const classes = useStyles({})

  return (
    <footer className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <IconLink to="mailto:hi@cardsofcrypto.com" icon="envelope-square" />
          <IconLink to="https://medium.com/@broadhaven.tech" icon={["fab", "medium"]} />
          <IconLink to="https://twitter.com/broadhaventech" icon={["fab", "twitter"]} />
          <IconLink to="https://github.com/tim-hm" icon={["fab", "github"]} />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
