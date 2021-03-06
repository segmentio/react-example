import React, { useEffect, useState } from "react"
import { Pane, majorScale, Text, Button, BookIcon } from "evergreen-ui"
import {
  defaultProductViewedProperties,
  trackProductViewed,
} from "../../../analytics-quick-start/analytics"
import BaseCodeBlock from "./BaseCodeBlock"
import { getStringifiedProperties } from "./utils"

interface Book {
  title: string
  author: string
}
const EXAMPLE_BOOKS: Book[] = [
  { title: "Little Women", author: "Louisa May Alcott" },
  { title: "Sherlock Holmes", author: "Arthur Conan Doyle" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
]

const getRandomBook = (): Book =>
  EXAMPLE_BOOKS[Math.floor(Math.random() * EXAMPLE_BOOKS.length)]

const getCodeText = ({
  title,
  author,
}: Book) => `analytics.track("Product Viewed", {
  "title": "${title}",
  "author": "${author}",
  ${getStringifiedProperties(defaultProductViewedProperties)}
})`

const ProductViewedExample: React.FC = () => {
  const [showProduct, setShowProduct] = useState<boolean>(false)
  const [randomBook, setRandomBook] = useState<Book>({ title: "", author: "" })

  useEffect(() => {
    if (showProduct) {
      trackProductViewed(randomBook)
    }
  }, [showProduct])

  return (
    <Pane display="flex" flexDirection="column">
      <Text marginBottom={majorScale(4)}>
        Send this event when a user views product details
      </Text>
      <Pane display="flex" background="tint1" padding={majorScale(3)}>
        <Pane display="flex" flexDirection="column" marginRight={majorScale(3)}>
          <Text marginBottom={majorScale(2)}>
            Click the button to {showProduct ? "hide" : "view"} the product:
          </Text>
          {!showProduct && (
            <Button
              appearance="primary"
              onClick={() => {
                setRandomBook(getRandomBook())
                setShowProduct(true)
              }}
              width={majorScale(30)}
            >
              Click Me!
            </Button>
          )}
          {showProduct && (
            <Pane
              display="flex"
              onClick={() => {
                setRandomBook({ title: "", author: "" })
                setShowProduct(false)
              }}
              border
              width="fit-content"
              height="fit-content"
              padding={majorScale(2)}
              cursor="pointer"
            >
              <BookIcon size={majorScale(12)} color="muted" />
              <Pane display="flex" flexDirection="column">
                <Text>{randomBook.title}</Text>
                <Text>{randomBook.author}</Text>
              </Pane>
            </Pane>
          )}
        </Pane>
        <BaseCodeBlock codeText={getCodeText(randomBook)} highlight="2,3" />
      </Pane>
    </Pane>
  )
}

export default ProductViewedExample
