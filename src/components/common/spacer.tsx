import * as React from "react"

interface IProps {
  vertical?: boolean
  size: string
}

export default (props: IProps) => {
  const { vertical, size } = props

  const style = {
    [vertical ? "height" : "width"]: size + "px"
  }

  return <div style={style} />
}
