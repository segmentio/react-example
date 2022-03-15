# Using the Segment npm package (analytics-next)

There are 2 recommended ways to implement Segment's Javascript ([Analytics 2.0](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/)) in a React app:

- Through an NPM package
- [As a Segment Snippet](https://github.com/segmentio/react-example/tree/main/src/examples/analytics-quick-start)

**The example deployed through this repo uses the Segment snippet by default.**

In order to experience a deployed example that uses the npm package, there are a couple of places that must be commented or uncommented through the repo. They are searchable throughout the code with the `COMMENT OUT FOR PACKAGE EXAMPLE` or `UNCOMMENT FOR PACKAGE EXAMPLE` strings. Read the following section for more information.

## Implementation

This section provides a breakdown of all the files and file changes required to implement Segment through the npm package.

### [package.json](https://github.com/segmentio/react-example/blob/main/package.json)

You must install the npm package. This step is already [done](https://github.com/segmentio/react-example/blob/53ecd804f449dd06e3080c6d822b26c0a11063f4/package.json#L7) for this repo.

Unlike the snippet implementation, if there are changes to this library, they must be manually updated with the package manager.

```
# npm 
npm install @segment/analytics-next

# yarn
yarn add @segment/analytics-next

#pnpm
pnpm add @segment/analytics-next
```

### [index.html](https://github.com/segmentio/react-example/blob/main/public/index.html)

Comment out the Segment snippet in the [index.html](https://github.com/segmentio/react-example/blob/53ecd804f449dd06e3080c6d822b26c0a11063f4/public/index.html#L16-L21) file. 

Unlike the [snippet instrumentation](https://github.com/segmentio/react-example/tree/main/src/examples/analytics-quick-start#indexhtml), using the npm package loads analytics _after_ the page mounts on the DOM.

### [Analytics Context](https://github.com/segmentio/react-example/tree/main/src/examples/analytics-package/analytics-context)

React context allows us to pass down and use values in components we need without using props. More information on using React's context [here](https://reactjs.org/docs/context.html).

**Important:** Since we are not using the snippet to put `analytics` in the global `Window`, we must declare it in order to use it. 

We do not want to load analytics in every component manually or through a hook, or manually pass it down to every child. This could potentially load analytics more than once throughout your app and could lead to clunky code.

Instead, we use a React context to [load analytics](https://github.com/segmentio/react-example/blob/53ecd804f449dd06e3080c6d822b26c0a11063f4/src/examples/analytics-package/analytics-context/Provider.tsx#L12-L27), and use a `Provider` in order to pass and use the `analytics` value down to child components. This ensures that analytics is only loaded once, and allows us to access the `analytics` object throughout our components.

### [App.tsx](https://github.com/segmentio/react-example/blob/main/src/examples/analytics-package/App.tsx)

Unlike the [snippet instrumentation](https://github.com/segmentio/react-example/tree/main/src/examples/analytics-quick-start#apptsx), we must wrap the App in a [Provider](https://github.com/segmentio/react-example/blob/53ecd804f449dd06e3080c6d822b26c0a11063f4/src/examples/analytics-package/App.tsx#L7-L9) in order to _cleanly_ pass `analytics` down to child components.

### [useAnalytics.ts](https://github.com/segmentio/react-example/blob/main/src/examples/analytics-package/useAnalytics.ts)

We do not recommend calling analytics calls directly from components as they are untyped, can be duplicated with missing properties, and can get out of hand for larger apps.

By using an [analytics file](https://github.com/segmentio/react-example/blob/main/src/examples/analytics-package/useAnalytics.ts) (or files), you can have more uniform events, easily trace where they are being called in your app, and have a set place to edit analytics.

Trace the analytics functions in this hook to view where analytics calls are being made throughout the app. Since this example is not the deployed default, you must uncomment the `useAnalytics` [import](https://github.com/segmentio/react-example/blob/53ecd804f449dd06e3080c6d822b26c0a11063f4/src/examples/shared/BaseApp.tsx#L9-L10) & [useage](https://github.com/segmentio/react-example/blob/53ecd804f449dd06e3080c6d822b26c0a11063f4/src/examples/shared/BaseApp.tsx#L16-L17) and comment out the `analytics-quick-start` [import](https://github.com/segmentio/react-example/blob/53ecd804f449dd06e3080c6d822b26c0a11063f4/src/examples/shared/BaseApp.tsx#L11).

We recommend planning a [full Segment installation](https://segment.com/docs/getting-started/03-planning-full-install/) to determine which events & properties to track utilize data meaningfully.

For teams who are planning extensive analytics calls, we recommend [Protocols](https://segment.com/docs/protocols/) to align teams with a Tracking Plan, allow/block/omit events & properties, resolve data issues with Transformations, and more. Protocols also includes typed event generation through [typewriter](https://segment.com/docs/protocols/apis-and-extensions/typewriter/).
