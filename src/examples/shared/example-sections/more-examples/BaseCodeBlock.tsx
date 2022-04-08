import React from "react"
import { Pane, majorScale } from "evergreen-ui"
import { CodeBlock } from "@atlaskit/code"

interface Props {
  codeText: string
  highlight?: string
}

const BaseCodeBlock: React.FC<Props> = ({ codeText, highlight }) => (
  <Pane width={majorScale(70)}>
    <CodeBlock
      text={codeText}
      language="javascript"
      showLineNumbers={true}
      highlight={highlight}
    />
  </Pane>
)

export default BaseCodeBlock
