# Using the Segment snippet

There are 2 recommended ways to implement Segment's Javascript ([Analytics 2.0](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/)) in a React app:

- As a Segment Snippet
- [Through an NPM package](https://github.com/segmentio/react-example/tree/main/src/examples/analytics-package)

**We generally recommend this method of instrumentation.** The example deployed through this repo uses the Segment snippet by default.

Benefits of using the Segment snippet:

- Less instrumentation lift
- Automatic updates whenever the analytics library is updated
- Hosted through the Segment [CDN](https://segment.com/docs/glossary/#cdn)

## Implementation

This section provides a breakdown of all the files and file changes required to implement Segment through the snippet.

### [index.tsx](https://github.com/segmentio/react-example/blob/main/src/index.tsx)

The App rendered by default is the one for the Segment snippet. There are no changes required.

### [index.html](https://github.com/segmentio/react-example/blob/main/public/index.html)

We load the Segment snippet in the [index.html](https://github.com/segmentio/react-example/blob/54d8e648e7137ac27321825a7e3eb6a1736d88eb/public/index.html#L12-L17) file.

By placing the snippet in the `<head>` of your `index.html`, Segment is loaded asyncronously and will not affect your page's load speed. Once the page is mounted onto the DOM, `analytics` calls can be immediately placed.

### [App.tsx](https://github.com/segmentio/react-example/blob/main/src/examples/analytics-quick-start/App.tsx)

Unlike the [npm instrumentation](https://github.com/segmentio/react-example/tree/main/src/examples/analytics-package#apptsx), there are no code changes required when using the snippet.

### [analytics.ts](https://github.com/segmentio/react-example/blob/main/src/examples/analytics-quick-start/analytics.ts)

We do not recommend calling analytics calls directly from components as they are untyped, can be duplicated with missing properties, and can get out of hand for larger apps.

By using an [analytics file](https://github.com/segmentio/react-example/blob/main/src/examples/analytics-quick-start/analytics.ts) (or files), you can have more uniform events, easily trace where they are being called in your app, and have a set place to edit analytics.

Trace the analytics functions in this file to view where analytics calls are being made throughout the app. Please ignore code that is commented out as it pertains to the [analytics package example](link_to_analytics_package_readme_section).

We recommend planning a [full Segment installation](https://segment.com/docs/getting-started/03-planning-full-install/) to determine which events & properties to track utilize data meaningfully.

For teams who are planning extensive analytics calls, we recommend [Protocols](https://segment.com/docs/protocols/) to align teams with a Tracking Plan, allow/block/omit events & properties, resolve data issues with Transformations, and more. Protocols also includes typed event generation through [typewriter](https://segment.com/docs/protocols/apis-and-extensions/typewriter/).

### [types.ts](https://github.com/segmentio/react-example/blob/main/src/examples/analytics-quick-start/types.ts)

As this is a typescript example, we must extend the `Window` in order for us to call `analytics` without erroring. This file is not required when using javascript.
