import * as React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import { AppBar, Toolbar, Drawer, IconButton, Typography, List, Theme } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DrawerItem from "./header/drawer-item"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing.unit * 2,
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing.unit
    }
  },
  appBar: {
    backgroundColor: "inherit",
    padding: "0px",
    margin: "0px"
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawerList: {
    width: 250
  },
  menuIcon: {
    color: theme.palette.error.main
  }
}))

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const classes = useStyles({})

  return (
    <header className={classes.root}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            onClick={() => setShowDrawer(!showDrawer)}
          >
            <FontAwesomeIcon icon="bars" className={classes.menuIcon} />
          </IconButton>
          <div className={classes.title}>
            <Typography variant="h3" color="secondary">
              Cards of Crypto.
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <div className={classes.drawerList} onClick={() => setShowDrawer(false)}>
          <List>
            <DrawerItem to="/" text="Home" icon="home" />
            <DrawerItem to="/create" text="Create a card" icon="edit" />
            <DrawerItem to="/questions" text="Questions" icon="question" />
            <DrawerItem external to="https://broadhaven.tech" text="About Us" icon="user-tie" />
          </List>
        </div>
      </Drawer>
    </header>
  )
}

export default Header
