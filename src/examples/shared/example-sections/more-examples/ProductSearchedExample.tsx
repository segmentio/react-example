import React, { useState } from "react"
import { trackProductSearched } from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"
import FormField from "../../FormField"
import { Pane } from "evergreen-ui"
import BaseCodeBlock from "./BaseCodeBlock"

const getCodeText = (
  formValue: string
) => `analytics.track("Product Searched", {
  query: "${formValue}",
})`

export const ProductSearchedExample: React.FC = () => {
  const [codeText, setCodeText] = useState<string>(getCodeText(""))
  const handleInputChange = (value: string) => {
    setCodeText(getCodeText(value))
  }

  return (
    <BaseExample url="https://segment.com/docs/connections/spec/ecommerce/v2/#products-searched">
      <Pane display="flex" justifyContent="space-between">
        <FormField
          onFormSubmit={trackProductSearched}
          onInputChange={handleInputChange}
          formLabel="Search"
          buttonText="Search"
        />
        <BaseCodeBlock codeText={codeText} />
      </Pane>
    </BaseExample>
  )
}

export default ProductSearchedExample
