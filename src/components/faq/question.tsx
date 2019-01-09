import * as React from "react"
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface IProps {
  question: string
  answer: string | JSX.Element
}

const Question: React.SFC<IProps> = ({ question, answer }) => (
  <ListItem>
    <ListItemIcon>
      <FontAwesomeIcon icon="comments" />
    </ListItemIcon>
    <ListItemText primary={question} secondary={answer} />
  </ListItem>
)

export default Question
