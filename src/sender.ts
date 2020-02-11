import { Events } from './events';
import { getConfig } from './index';

function formatData(events: Array<Events>): string {
  return JSON.stringify({
    type: getConfig().eventType,
    events,
  });
}

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

// This is just used for IE11
export function XMLHttpSender(events: Array<Events>, isSync: boolean) {
  if (getConfig().debugMode) {
    console.log(
      'XMLHttpSender is sending data: ',
      formatData(events),
      ' with sync mode: ',
      isSync
    );
    return;
  }

  const req = new XMLHttpRequest();
  req.open('POST', getConfig().endpointURL, !isSync);
  req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  req.send(formatData(events));
  // req.onerror((_this, ev) => {throw ev});
}

/**
 * This sends the array of events to the server but returns a promise so you can
 * wait to make sure they get sent correctly.
 * @param events the array of events to send.
 */
export function promiseSender(events: Array<Events>): Promise<void> {
  if (getConfig().debugMode) {
    console.log('promiseSender is sending data: ', formatData(events));
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
        reject({
          status: req.status,
          statusText: req.statusText,
        });
      }
    };
    req.open('POST', getConfig().endpointURL, true);
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    req.send(formatData(events));
  });
}

/**
 * Automatically choose the best way to send events.
 */
export function getSender(): typeof XMLHttpSender {
  return !!navigator.sendBeacon ? beaconSender : XMLHttpSender;
}
