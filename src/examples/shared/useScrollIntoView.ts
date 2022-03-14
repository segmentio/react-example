import { useRef } from "react"
import analyticsEventSections from "./example-sections/constants"


const useScrollIntoView = () => {
    const sectionRefs = analyticsEventSections.map(_ => (useRef<HTMLDivElement>(null)))

    const getSectionRef = (index: number) => sectionRefs[index]

    const scrollIntoRefView = (index: number) => {
        const sectionRef = getSectionRef(index)
        sectionRef.current?.scrollIntoView()
    }

    return [getSectionRef, scrollIntoRefView ] as const
}

export default useScrollIntoView