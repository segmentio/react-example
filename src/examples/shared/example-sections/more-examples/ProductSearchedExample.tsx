import React, { useState } from "react"
import { trackProductSearched } from "../../../analytics-quick-start/analytics"
import FormField from "../../FormField"
import { Pane, Text, majorScale } from "evergreen-ui"
import BaseCodeBlock from "./BaseCodeBlock"

const getCodeText = (
  formValue: string
) => `analytics.track("Product Searched", {
  "query": "${formValue}",
})`

export const ProductSearchedExample: React.FC = () => {
  const [codeText, setCodeText] = useState<string>(getCodeText(""))
  const handleInputChange = (value: string) => {
    setCodeText(getCodeText(value))
  }

  return (
    <Pane display="flex" flexDirection="column">
      <Text marginBottom={majorScale(4)}>
        Send this event when a user searches for a product
      </Text>
      <Pane display="flex" background="tint1" padding={majorScale(3)}>
        <Pane display="flex" flexDirection="column" marginRight={majorScale(3)}>
          <Text marginBottom={majorScale(2)}>Search for a product:</Text>
          <FormField
            onFormSubmit={trackProductSearched}
            onInputChange={handleInputChange}
            formLabel="Search"
            buttonText="Search"
          />
        </Pane>
        <BaseCodeBlock codeText={codeText} highlight="2" />
      </Pane>
    </Pane>
  )
}

export default ProductSearchedExample
