import SourceWriteKeyExample from "./source-write-key"
import PageExample from "./page"


const analyticsEventSections = [
    {
        title: "The Source Write Key",
        description: "You must first set up this Source in order to see events flowing through your debugger.",
        children: SourceWriteKeyExample
    },
    {
        title: "analytics.page()",
        description: "BLURB",
        children: PageExample
    },
    {
        title: "analytics.track()",
        description: "BLURB",
    },
    {
        title: "analytics.identify()",
        description: "BLURB",
    },
    {
        title: "Putting it all together",
        description: "BLURB",
    },
    {
        title: "More examples: analytics.track()",
        description: "BLURB",
    },
    {
        title: "More examples: analytics.identify()",
        description: "BLURB",
    },
    {
        title: "More examples: analytics.group()",
        description: "BLURB",
    },
]

export default analyticsEventSections