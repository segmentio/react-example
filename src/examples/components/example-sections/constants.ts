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
        description: "The page call lets you record whenever a user sees a page of your website, along with any optional properties about the page.",
        children: PageExample
    },
    {
        title: "analytics.track()",
        description: "The track call is how you record any actions your users perform, along with any properties that describe the action.",
    },
    {
        title: "analytics.identify()",
        description: "The identify call lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about the user, like their email, name, etc.",
    },
    {
        title: "Putting it all together",
        description: "You can use track and identify to understand who is doing what.",
    },
    {
        title: "More examples: analytics.track()",
        description: "Product added to cart",
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