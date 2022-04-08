import React from "react"
import { Pane, majorScale } from "evergreen-ui"
import { CopyBlock } from "react-code-blocks"

const BaseCodeBlock: React.FC<{ codeText: string }> = ({ codeText }) => (
  <Pane width={majorScale(70)}>
    <CopyBlock
      text={codeText}
      language="javascript"
      theme="dracula"
      showLineNumbers={true}
    />
  </Pane>
)

export default BaseCodeBlock
