import React from "react"
import { Pane, majorScale, Text, Link } from "evergreen-ui"

interface Props {
  children: React.ReactNode
  url: string
}

const BaseExample: React.FC<Props> = ({ children, url }) => {
  return (
    <Pane display="flex" width="100%" flexDirection="column">
      <Text marginBottom={majorScale(1)}>
        <Link href={url} target="blank_">
          Spec
        </Link>
      </Text>
      {children}
    </Pane>
  )
}

export default BaseExample
