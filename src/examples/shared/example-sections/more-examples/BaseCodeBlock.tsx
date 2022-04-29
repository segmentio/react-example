import React from "react"
import { Pane, majorScale, Text } from "evergreen-ui"
import { CodeBlock } from "@atlaskit/code"

interface Props {
  codeText: string
  highlight?: string
}

const BaseCodeBlock: React.FC<Props> = ({ codeText, highlight }) => (
  <Pane
    width={majorScale(46)}
    paddingLeft={majorScale(3)}
    display="flex"
    flexDirection="column"
    borderLeft
  >
    <Text marginBottom={majorScale(2)}>Preview of the code snippet:</Text>
    <CodeBlock
      text={codeText}
      language="javascript"
      showLineNumbers={true}
      highlight={highlight}
    />
  </Pane>
)

export default BaseCodeBlock
