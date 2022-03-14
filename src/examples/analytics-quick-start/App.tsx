import React, { useEffect } from "react"
import { homePageViewed } from "./analytics"
import BaseApp from "../shared/BaseApp"

const App: React.FC = () => {
  useEffect(() => {
    homePageViewed()
  }, [])

  return <BaseApp />
}

export default App
