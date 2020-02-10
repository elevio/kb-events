# Elevio analytics

This is the code required to send knowledge base analytic events to Elevio.
It is written in Typescript but works fine in plain Javascript.

## Instalation

Run `npm i` to install all dependencies.

Note: These dependencies are only for compiling, the actual code doesn't use any external dependencies, other than tslib, which is used to polyfill promises for older browsers.

Then to compile the Typescript code into Javscript run `npm run build`.
This puts the compiled code and typedefs in the lib dir.

## Example

To see this in action there is an example.

In that directory install the dependencies by running `npm i`.

You can see the example of the usage in `example/src/index.ts`.
To build that example run `npm run build` and then to startup a server to see it running run `npm run server`, then you can open a web browser at http://localhost:8000, if you open the console you will see the output of the events in the terminal.

If you would like to actually send some events for testing you can switch `debugMode` off in `example/src/index.ts` and also set the correct companyUid.

## Usage

First you must run the `setup` command that is exported from the base package.
You must at a minimum include the companyUid in the options. You can get the companyUid from https://app.elev.io/installation it is listed as "Account ID".

Then you may start triggering events. **NOTE:** You must wait for the DOM to be loaded before you send any events.

The list of events are exported via the `events` object in the base package. For documentation on the events see API below.

You fire the event using `track` also exported from the base package.
Like this:

```js
// this may change, depending on how you install
import { setup, track, events } from 'analytics';

setup({ companyUid: 'my-companyUID' });

document.addEventListener('DOMContentLoaded', function() {
  track(events.pageViewArticle('art123', 'article title'));
});
```

If you wish to wait for the event to be sent you can use the `sendNow` function that is exported from the base package.

This returns a promise that you can wait on.

```js
// this may change, depending on how you install
import { setup, sendNow, events } from 'analytics';

setup({ companyUid: 'my-companyUID' });

document.addEventListener('DOMContentLoaded', function() {
  sendNow(events.pageViewArticle('art123', 'article title')).then(() => {
    console.log('Event successfully sent!');
  });
});
```

## API / Events

For all the documention about all the different functions and options see [API Docs](docs/globals.md)
