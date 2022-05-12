import { useLayoutEffect, useState } from "react"
import analyticsEventSections from "./example-sections/constants"
import { majorScale } from "evergreen-ui"
import { inRange, takeRight } from "lodash"

const useCalculateScroll = (
  offset = majorScale(17)
): { activeTitle: string } => {
  const [activeTitle, setActiveTitle] = useState("")

  const lastSectionTitles = takeRight(analyticsEventSections, 2).map(
    (section) => section.title
  )

  useLayoutEffect(() => {
    const listener = () => {
      const scrollPosition = window.pageYOffset

      const position = analyticsEventSections
        .map((eventSection) => {
          const { title } = eventSection
          const element = document.getElementById(title)

          if (!element) {
            return { title, top: -1, bottom: -1, rectTop: -1 }
          }

          const rect = element.getBoundingClientRect()
          const top = Math.max(0, rect.top + scrollPosition - offset)
          const bottom = Math.max(0, rect.bottom + scrollPosition - offset)

          return { title, top, bottom, rectTop: rect.top }
        })
        .find(({ top, bottom, title, rectTop }) => {
          if (lastSectionTitles.includes(title)) {
            return rectTop > 0
          }
          return inRange(scrollPosition, top, bottom)
        })

      setActiveTitle(position?.title || "")
    }

    listener()

    window.addEventListener("resize", listener)
    window.addEventListener("scroll", listener)

    return () => {
      window.removeEventListener("resize", listener)
      window.removeEventListener("scroll", listener)
    }
  }, [offset])

  return { activeTitle }
}

export default useCalculateScroll
