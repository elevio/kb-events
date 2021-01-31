@elevio/kb-events / [Exports](modules.md)

# Elevio knowledge base events

This is the code required to send knowledge base analytic events to Elevio.
It is written in Typescript but works fine in plain Javascript.

## Installation

Run `npm i` to install all dependencies.

Note: These dependencies are only for compiling, the actual code doesn't use any external dependencies, other than tslib, which is used to polyfill promises for older browsers.

Then to compile the Typescript code into Javscript run `npm run build`.
This puts the compiled code and typedefs in the lib dir.

## Example

To see this in action there is an example. You can see the example of the usage in `example/src/index.ts`. To see it running locally, follow the below instructions:

In the root directory:

- Run `npm run build`

In the `example` directory:

- Run `npm i` to install dependencies
- Run `npm run build` to build the example
- Run `npm run server` to start up a server
- Open a web browser at http://localhost:8000. If you open the console you will see the output of the events in the terminal.

If you would like to actually send some events for testing you can set `debugMode` to `false` in `example/src/index.ts` and also set the correct companyUid.

## Usage

First you must run the `setup` command that is exported from the base package.
You must at a minimum include the companyUid in the options. You can get the companyUid from https://app.elev.io/installation it is listed as "Account ID".

Then you may start triggering events. **NOTE:** You must wait for the DOM to be loaded before you send any events.

The list of events are exported via the `events` object in the base package. For documentation on the events see API below.

You fire the event using `track` also exported from the base package.
Like this:

```js
// this may change, depending on how you install
import { setup, track, events } from '@elevio/kb-events';

setup({ companyUid: 'my-companyUID', languageId: 'en' });

document.addEventListener('DOMContentLoaded', function () {
  track(
    events.pageViewArticle({
      articleId: 'art123',
      articleTitle: 'article title',
    })
  );
});
```

To set the language that the user is viewing content in it can either be set with the `setLanguageId` function or passed into the `setup` function.

```js
import { setup, setLanguageId } from '@elevio/kb-events';

setup({ companyUid: 'my-companyUID', languageId: 'en' });

// OR

setup({ companyUid: 'my-companyUID' });
// ...
setLanguageId('en');
```

To set the details of the user that is logged in there is the `setUser` function.

```js
import { setup, setUser } from '@elevio/kb-events';

setup({ companyUid: 'my-companyUID', languageId: 'en' });
setUser({
  id: 'my-users-id',
  email: 'users@email.com',
});
```

If you wish to wait for the event to be sent you can use the `sendNow` function that is exported from the base package.

This returns a promise that you can wait on.

```js
// this may change, depending on how you install
import { setup, sendNow, events } from '@elevio/kb-events';

setup({ companyUid: 'companyUID' });

document.addEventListener('DOMContentLoaded', function () {
  sendNow(events.pageViewArticle('art123', 'article title')).then(() => {
    console.log('Event successfully sent!');
  });
});
```

## API / Events

For all the documention about all the different functions and options see [API docs](docs/globals.md) or here [HTML docs](https://elevio.github.io/kb-events/globals.html)
