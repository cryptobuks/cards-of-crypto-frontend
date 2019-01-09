import * as React from "react"
import { IconButton } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "./link"

interface IProps {
  to: string
  icon: any
}

const IconLink = (props: IProps) => {
  const { to, icon } = props

  return (
    <Link external to={to}>
      <IconButton color="secondary">
        <FontAwesomeIcon icon={icon} size="sm" />
      </IconButton>
    </Link>
  )
}

export default IconLink
