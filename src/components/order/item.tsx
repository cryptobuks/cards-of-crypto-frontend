import * as React from "react"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface IProps {
  icon: IconProp
  primary: JSX.Element | string
  secondary?: string
}

export const Item: React.SFC<IProps> = ({ icon, primary, secondary }) => (
  <ListItem>
    <ListItemIcon>
      <FontAwesomeIcon icon={icon} size="lg" />
    </ListItemIcon>
    <ListItemText primary={primary} secondary={secondary} />
  </ListItem>
)
