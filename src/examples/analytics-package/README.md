# Using the Segment snippet

There are 2 recommended ways to implement Segment's Javascript ([Analytics 2.0](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/)) in a React app:

- Through an NPM package
- [As a Segment Snippet](link_to_analytics_quickstart_readme)

**The example deployed through this repo uses the Segment snippet by default.**

In order to experience a deployed example that uses the npm package, there are a couple of places that must be commented or uncommented through the repo. Read the following section for more information.

## Implementation

This section provides a breakdown of all the files and file changes required to implement Segment through the npm package.

### package.json

You must install the npm package. This step is already done for this repo.
```
# npm 
npm install @segment/analytics-next

# yarn
yarn add @segment/analytics-next

#pnpm
pnpm add @segment/analytics-next
```

### index.html

Comment out the Segment snippet in the [index.html](https://github.com/segmentio/react-example/blob/54d8e648e7137ac27321825a7e3eb6a1736d88eb/public/index.html#L12-L17) file. 

Unlike the [snippet instrumentation](link_to_analytics_snippet_readme_section), we load analytics _after_ the page mounts on the DOM.

### Analytics Context

React context allows us to pass down and use values in components we need without using props. More information on using React's context [here](https://reactjs.org/docs/context.html).

**Important:** Since we are not using the snippet to put `analytics` in the global `Window`, we must declare it in order to use it. 

We do not want to [load it in every component](link_to_code) through a hook, or manually pass it down to every child.

Instead, we load analytics in the [context](link_to_dir), and use a `Provider` in order to pass and use the `analytics` value down to child components.

### App.tsx

Unlike the [snippet instrumentation](link_to_analytics_snippet_readme_section), we must wrap the App in a [Provider](link_to_file) in order to _cleanly_ pass `analytics` down to child components.

### useAnalytics.ts

We do not recommend calling analytics calls directly from components as they are untyped, can be duplicated with missing properties, and can get out of hand for larger apps.

By using an [analytics file](link_to_file) (or files), you can have more uniform events, easily trace where they are being called in your app, and have a set place to edit analytics.

Trace the analytics functions in this hook to view where analytics calls are being made throughout the app. Since this example is not the deployed default, you must uncomment the `useAnalytics` [import](link_to_line) & [useage](link_to_line) and comment out the `analytics-quick-start` [import](link_to_line).

We recommend planning a [full Segment installation](https://segment.com/docs/getting-started/03-planning-full-install/) to determine which events & properties to track utilize data meaningfully.

For teams who are planning extensive analytics calls, we recommend [Protocols](https://segment.com/docs/protocols/) to align teams with a Tracking Plan, allow/block/omit events & properties, resolve data issues with Transformations, and more. Protocols also includes typed event generation through [typewriter](https://segment.com/docs/protocols/apis-and-extensions/typewriter/).
