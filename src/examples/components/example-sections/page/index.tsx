import React from "react"
import { Pane, majorScale, Text, Link, minorScale } from "evergreen-ui"

const PageExample: React.FC = () => (
    <Pane 
        display="flex"
        marginTop={majorScale(2)}
        justifyContent="space-between"
    >
        <Pane 
            display="flex" 
            flexDirection="column"
        >
            <Text>Upon loading this page, a{" "}<Link href="https://segment.com/docs/connections/spec/page/">page</Link>{" "}event was fired and sent to your debugger.
            </Text>
            <Text marginTop={minorScale(1)}>WHAT IS PAGE AND WHY YOU WOULD USE IT</Text>
        </Pane>
       
        <img 
            style={{ "max-width": "50%" } as any}
            alt="Debugger with page() call"
        />
    </Pane>
)

export default PageExample