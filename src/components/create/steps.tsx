import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Stepper, Step, StepLabel, StepContent, Typography, Theme } from "@material-ui/core"
// import ContactDetails from "./steps/contact-details"
// import CardMessage from "./steps/card-message"
// import Gift from "./steps/gift"
// import Image from "./steps/image"
// import LockedUntilDate from "./steps/locked-until-date"
// import Security from "./steps/security"
// import Preview from "./steps/preview"
// import Terms from "./steps/terms"
import { isStepCompleted } from "../../helpers/steps"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "600px",
    margin: "auto",
    overflowY: "scroll",
    overflowX: "hidden",
    maxHeight: "calc(100vh - 188px)",
    padding: theme.spacing.unit * 4,
    background: "rgb(255,255,255,0.9)",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "100%",
      padding: theme.spacing.unit * 2
    }
  },
  title: {
    fontWeight: "200",
    fontSize: "1.25rem",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer"
    }
  }
}))

interface IProps {
  card: ApolloCache
  updateValue: any
  step: any
  onBack: any
  onNext: any
  setStep: any
  stepsCompleted: any
}

const Steps: React.SFC<IProps> = ({ card, updateValue, step, onBack, onNext, setStep, stepsCompleted }) => {
  const classes = useStyles({})
  const steps = [
    // { Component: ContactDetails, title: "Contact details" },
    // { Component: CardMessage, title: "Write something inspirational" },
    // { Component: Gift, title: "Cryptocurrency gift" },
    // { Component: Image, title: "Select an image" },
    // { Component: LockedUntilDate, title: "Prevent the card from being opened early?" },
    // { Component: Security, title: "Set a passphrase on the card" },
    // { Component: Preview, title: "Preview your card" },
    // { Component: Terms, title: "Terms and Conditions of use" }
  ]

  return (
    <Stepper activeStep={step} orientation="vertical" className={classes.root} square={false}>
      {/* {steps.map(({ Component, title }, index) => {
        return (
          <Step key={index}>
            <StepLabel
              onClick={() => setStep(index)}
              completed={isStepCompleted(index, card) && stepsCompleted[index]}
            >
              <Typography className={classes.title}>{title}</Typography>
            </StepLabel>
            <StepContent>
              <Component card={card} onNext={onNext} onBack={onBack} updateValue={updateValue} />
            </StepContent>
          </Step>
        )
      })} */}
    </Stepper>
  )
}

export default Steps
