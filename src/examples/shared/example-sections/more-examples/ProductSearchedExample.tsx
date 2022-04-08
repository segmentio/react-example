import React from "react"
import { trackProductSearched } from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"
import FormField from "../../FormField"

export const ProductSearchedExample: React.FC = () => (
  <BaseExample url="https://segment.com/docs/connections/spec/ecommerce/v2/#products-searched">
    <FormField
      onFormSubmit={trackProductSearched}
      formLabel="Search"
      buttonText="Search"
    />
  </BaseExample>
)

export default ProductSearchedExample
