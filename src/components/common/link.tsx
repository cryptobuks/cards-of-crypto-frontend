import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Link as RouterLink } from "react-router-dom"
import { Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textDecoration: "none",
    color: theme.palette.primary.dark,
    "&:hover": {
      textDecoration: "underline"
    }
  }
}))

interface IProps {
  external?: boolean
  email?: boolean
  children?: JSX.Element
  text?: string
  to: string
  rest?: any
}

const Link: React.SFC<IProps> = (props: any) => {
  const { external, email, to, children, text, rest } = props
  const classes = useStyles({})

  let inner: any = text
  if (!text) inner = children

  if (external)
    return (
      <a target="_blank" rel="noopener noreferrer" href={to} className={classes.root} {...rest}>
        {inner}
      </a>
    )

  if (email)
    return (
      <a href={to} className={classes.root} {...rest}>
        {inner}
      </a>
    )

  return (
    <RouterLink to={to} className={classes.root} {...rest}>
      {inner}
    </RouterLink>
  )
}

export default Link
