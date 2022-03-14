import { createRef, RefObject,  useRef } from "react"
import analyticsEventSections from "./example-sections/constants"

interface UseScrollIntoViewPayload {
  getSectionRef: (index: number) => React.RefObject<HTMLDivElement>
  scrollIntoRefView: (index: number) => void
}

const useScrollIntoView = (): UseScrollIntoViewPayload => {
    const sectionsRef = useRef<Array<RefObject<HTMLDivElement>>>(analyticsEventSections.map(() => createRef<HTMLDivElement>()))

    const getSectionRef = (index: number) => sectionsRef.current[index]

    const scrollIntoRefView = (index: number) => {
        const sectionRef = getSectionRef(index)
        sectionRef?.current?.scrollIntoView()
    }

    return { getSectionRef, scrollIntoRefView }
}

export default useScrollIntoView