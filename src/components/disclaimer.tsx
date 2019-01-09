import * as React from "react"
import { Modal, Paper, Typography, Button, withStyles, createStyles, Theme } from "@material-ui/core"
import Config from "../config"
import Link from "./common/link"

const { DISCLAIMER, PRIVACY_POLICY } = Config

const styles = createStyles((theme: Theme) => ({
  root: {
    margin: "200px auto",
    maxWidth: "400px",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 4
  },
  controls: {
    marginTop: theme.spacing.unit * 3,
    textAlign: "center"
  }
}))

interface IProps {
  classes: any
}

class Disclamier extends React.Component<IProps> {
  state = { open: false }

  componentDidMount = () => {
    if (!window.localStorage.disclaimer) {
      this.setState({ open: true })
    }
  }

  onAgree = () => {
    window.localStorage.setItem("disclaimer", Date.now().toString())
    this.setState({ open: false })
  }

  render = () => {
    const { open } = this.state
    const { classes } = this.props

    if (open) {
      return (
        <Modal
          aria-labelledby="disclaimer"
          aria-describedby="site disclaimer and privacy policy"
          open={open}
          onClose={() => this.setState({ open: false })}
        >
          <Paper className={classes.root}>
            <Typography gutterBottom>
              This site uses magic and cookies and from time to time we may save some data about your visit.
            </Typography>
            <Typography gutterBottom>
              You can read the details in our <Link external to={DISCLAIMER} text="disclaimer" /> and{" "}
              <Link external to={PRIVACY_POLICY} text="privacy policy" />.
            </Typography>
            <div className={classes.controls}>
              <Button variant="outlined" onClick={() => this.setState({ open: false })}>
                Decline
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button variant="outlined" color="primary" onClick={() => this.onAgree()}>
                Accept
              </Button>
            </div>
          </Paper>
        </Modal>
      )
    }
    return null
  }
}

export default withStyles(styles)(Disclamier)
