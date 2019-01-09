import * as React from "react"
import { useState } from "react"
import { Button, InputAdornment, Typography, TextField, Divider, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import dateFns from "date-fns"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme: Theme) => ({
  info: {
    marginBottom: theme.spacing.unit * 2
  },
  lock: {
    padding: theme.spacing.unit * 2
  },
  divider: {
    margin: theme.spacing.unit * 2
  },
  error: {
    margin: theme.spacing.unit,
    color: "red"
  }
}))

interface IProps {
  unlockedDate: string
  question: string
  onSubmit: (answer: string) => void
  error: boolean
}

const Locked: React.SFC<IProps> = ({ unlockedDate, question, onSubmit, error }) => {
  const [answer, setAnswer] = useState("")
  const classes = useStyles({})
  return (
    <>
      {Date.now() < new Date(unlockedDate).valueOf() ? (
        <Typography variant="h6">
          `This card is locked until ${dateFns.format(unlockedDate, "Do [of] MMM YYYY")}`}
        </Typography>
      ) : (
        <>
          <Typography variant="h6">Someone sent you a crypto card!</Typography>
          <Typography>
            To open your card, enter the passphrase below. If you don’t know the answer then ask the sender.
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="h6">
            Question: <em>"{question}"</em>
          </Typography>
          <Typography color="primary" variant="subtitle2" />
          <TextField
            required
            fullWidth
            type="password"
            variant="outlined"
            label="Answer"
            value={answer}
            error={error}
            margin="normal"
            onChange={event => setAnswer(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FontAwesomeIcon icon="key" />
                </InputAdornment>
              )
            }}
          />
          {error && <Typography className={classes.error}>That didn't work. Try again?</Typography>}
          <div style={{ textAlign: "right" }}>
            <Button
              disabled={answer === ""}
              onClick={() => onSubmit(answer)}
              color="secondary"
              size="small"
              variant="contained"
            >
              Open Card
            </Button>
          </div>
        </>
      )}
    </>
  )
}

export default Locked
