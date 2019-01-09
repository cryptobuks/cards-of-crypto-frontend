import * as React from "react"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import Link from "../common/link"

interface IProps {
  to: string
  text: string
  icon: IconProp
  external?: boolean
}
const DrawerItem = (props: IProps) => {
  const { to, text, icon, external } = props

  const inner = (
    <ListItem button>
      <ListItemIcon>
        <FontAwesomeIcon icon={icon} />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )

  return (
    <Link to={to} external={external}>
      {inner}
    </Link>
  )
}

export default DrawerItem
