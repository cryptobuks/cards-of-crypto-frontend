import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography, IconButton, Tooltip, Theme } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { copyToClipboard } from "../../helpers/utils"

const useStyles = makeStyles((theme: Theme) => ({
  tooltip: {
    maxWidth: "none"
  }
}))

interface IProps {
  heading: string
  text: string
}

const CopyText: React.SFC<IProps> = ({ heading, text }) => {
  const classes = useStyles({})
  return (
    <>
      <Typography variant="subtitle2">{heading}</Typography>
      <Tooltip title={text} interactive classes={{ tooltip: classes.tooltip }}>
        <Typography gutterBottom noWrap>
          <IconButton onClick={() => copyToClipboard(text)}>
            <FontAwesomeIcon icon="copy" size="xs" />
          </IconButton>
          {text}
        </Typography>
      </Tooltip>
    </>
  )
}

export default CopyText
