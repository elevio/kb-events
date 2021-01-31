import { Events } from './events';
import { getConfig } from './index';

export function formatData(events: Array<Events>): string {
  return JSON.stringify({
    type: getConfig().eventType,
    events,
  });
}

// only use beacon in the unload / visibilitychange
// https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/
// https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API#Browser_compatibility
export function beaconSender(events: Array<Events>) {
  if (getConfig().debugMode) {
    console.log('beaconSender is sending data: ', formatData(events));
    return;
  }

  const sent = navigator.sendBeacon(
    getConfig().endpointURL,
    formatData(events)
  );
  if (!sent) throw new Error('Sending failed');
}

/**
 * This sends the array of events to the server but returns a promise so you can
 * wait to make sure they get sent correctly.
 * @param events the array of events to send.
 */
export function promiseSender(
  events: Array<Events>,
  isSync: boolean = false
): Promise<void> {
  if (getConfig().debugMode) {
    console.log(
      'promiseSender is sending data: ',
      formatData(events),
      ' with sync mode: ',
      isSync
    );
    return Promise.resolve();
  }

  const req = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    // Setup our listener to process completed requests
    req.onreadystatechange = () => {
      // Only run if the req is complete
      if (req.readyState !== 4) return;

      // Process the response
      if (req.status >= 200 && req.status < 300) {
        resolve();
      } else {
        reject(req);
      }
    };
    req.open('POST', getConfig().endpointURL, !isSync);
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    req.send(formatData(events));

    // TODO: read about best way to catch error
    req.onerror = () => {
      // console.log('ON ERROR');
    };
    req.onabort = () => {
      // console.log('ON ABORT');
    };
  });
}
