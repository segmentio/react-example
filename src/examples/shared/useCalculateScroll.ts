import { useLayoutEffect, useState } from "react"
import analyticsEventSections from "./example-sections/constants"
import { majorScale } from "evergreen-ui"

const clamp = (value: number) => Math.max(0, value)

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil

const useCalculateScroll = (
  offset = majorScale(17)
): { activeTitle: string } => {
  const [activeTitle, setActiveTitle] = useState("")

  const lastSectionTitles = [
    analyticsEventSections[analyticsEventSections.length - 2].title,
    analyticsEventSections[analyticsEventSections.length - 1].title,
  ]

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset

      const position = analyticsEventSections
        .map((eventSection) => {
          const { title } = eventSection
          const element = document.getElementById(title)

          if (!element) return { title, top: -1, bottom: -1, rectTop: -1 }

          const rect = element.getBoundingClientRect()
          const top = clamp(rect.top + scroll - offset)
          const bottom = clamp(rect.bottom + scroll - offset)

          if (lastSectionTitles.includes(title)) {
            console.log({
              title,
              top: rect.top,
              bottom: rect.bottom,
              scroll,
              offset,
            })
          }

          return { title, top, bottom, rectTop: rect.top }
        })
        .find(({ top, bottom, title, rectTop }) => {
          if (lastSectionTitles.includes(title)) {
            return rectTop > 0
          }
          return isBetween(scroll, top, bottom)
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
