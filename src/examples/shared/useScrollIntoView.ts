import { useRef } from "react"
import analyticsEventSections from "./example-sections/constants"

interface UseScrollIntoViewPayload {
  getSectionRef: (index: number) => React.RefObject<HTMLDivElement>
  scrollIntoRefView: (index: number) => void
}

const useScrollIntoView = (): UseScrollIntoViewPayload => {
  const sectionRefs = analyticsEventSections.map((_) =>
    useRef<HTMLDivElement>(null)
  )

  const getSectionRef = (index: number) => sectionRefs[index]

  const scrollIntoRefView = (index: number) => {
    const sectionRef = getSectionRef(index)
    sectionRef.current?.scrollIntoView()
  }

  return { getSectionRef, scrollIntoRefView }
}

export default useScrollIntoView
