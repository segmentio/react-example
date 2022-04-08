import React, { useEffect, useState } from "react"
import { Pane, majorScale, Text, Button, BookIcon } from "evergreen-ui"
import { trackProductViewed } from "../../../analytics-quick-start/analytics"
import BaseExample from "./BaseExample"
import BaseCodeBlock from "./BaseCodeBlock"

const TITLE = "Title"
const AUTHOR = "Author"

const codeText = `analytics.track(eventName, {
  title: "${TITLE}",
  author: "${AUTHOR}",
  product_id: "PRODUCT_ID",
  sku: "SKU",
  category: "Books",
  variant: "VARIANT",
  price: 18.99,
  quantity: 1,
  coupon: "COUPON",
  currency: "USD",
  value: 18.99,
  url: "https://www.example.com/product/path",
  image_url: "https://www.example.com/product/path.jpg",
})`

const ProductViewed: React.FC = () => {
  const [showProduct, setShowProduct] = useState<boolean>(false)

  useEffect(() => {
    if (showProduct) {
      trackProductViewed({ title: TITLE, author: AUTHOR })
    }
  }, [showProduct])

  return (
    <Pane display="flex" flexDirection="column">
      {!showProduct && (
        <Button
          appearance="primary"
          onClick={() => setShowProduct(true)}
          width={majorScale(30)}
        >
          Click Me!
        </Button>
      )}
      {showProduct && (
        <Pane
          display="flex"
          onClick={() => setShowProduct(false)}
          border
          width="fit-content"
          padding={majorScale(2)}
          cursor="pointer"
        >
          <BookIcon size={majorScale(12)} color="muted" />
          <Pane display="flex" flexDirection="column">
            <Text>Title</Text>
            <Text>Author</Text>
          </Pane>
        </Pane>
      )}
    </Pane>
  )
}

export const ProductViewedExample = () => (
  <BaseExample url="https://segment.com/docs/connections/spec/ecommerce/v2/#product-viewed">
    <Pane display="flex" justifyContent="space-between">
      <ProductViewed />
      <BaseCodeBlock codeText={codeText} />
    </Pane>
  </BaseExample>
)

export default ProductViewedExample
