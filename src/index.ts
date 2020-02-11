import { Events } from './events';
import * as events from './events';
import { promiseSender, getSender } from './sender';
import Batch from './batch';

/** @hidden */
const DEFAULT_INTERVAL = 500;
/** @hidden */
const DEFAULT_EVENT_TYPE = 'web-kb-external-event';
/** @hidden */
const DEFAULT_ENDPOINT_URL = 'https://events.elev.io/v1/events';

export { events };

/** @hidden */
let batch: Batch | null;

/** @hidden */
type Config = {
  companyUid: string;
  isAnonMode: boolean;
  debugMode: boolean;
  endpointURL: string;
  eventType: string;
};

/** @hidden */
let config: Config | undefined;

/** @hidden */
export function getConfig(): Config {
  if (!config) throw new Error('Please run setup before sending events.');
  return config;
}

interface SetupOptions {
  /** The companyUid from Elevio */
  companyUid: string;

  /** How often to send events in ms, default to 500ms */
  interval?: number;

  /** Should we try to send the events before the page unloads, default to `true` */
  withUnload?: boolean;

  /** Test the events by printing them out */
  debugMode?: boolean;

  /** Allows you to override where the events are sent, useful for testing purposes */
  endpointURL?: string;

  /** Allows you to set a custom event type, generally not used */
  eventType?: string;

  /** @hidden */
  isAnonMode?: boolean;
}

/**
 * Instantiates and configures the analytics sender.
 *
 * @param options see [[Opts]]
 */

export function setup(options: SetupOptions) {
  const {
    companyUid,
    interval = DEFAULT_INTERVAL,
    withUnload,
    debugMode = false,
    endpointURL = DEFAULT_ENDPOINT_URL,
    eventType = DEFAULT_EVENT_TYPE,
    isAnonMode = false,
  } = options;
  config = {
    companyUid,
    debugMode,
    endpointURL,
    eventType,
    isAnonMode,
  };

  batch = new Batch({
    interval,
    withUnload,
    handler: getSender(),
  });
}

export interface User {
  id?: string;
  email: string;
}

/** @hidden */
export let _user: User | null = null;

/**
 * This will set the user
 * @param user
 */
export function setUser(user: User | null) {
  _user = user;
}

/**
 * This is the thing that adds the event to the dispatch queue.
 */
export function track(event: Events) {
  if (!batch) throw new Error('Please run setup.');
  batch.addEvent(event);
}

/**
 * This sends the events without using the batching q.
 * It returns a promise so you can wait for it and will throw an error if it fails.
 * @param events the array of events to send.
 */
export function sendNow(events: Array<Events>): Promise<void> {
  return promiseSender(events);
}

// TODO: auto-track
// export default function init(track) {
//   events.sub('document:ready', () => {
//     const pageeventconfig = settings.get('pageeventconfig');
//     if (!pageeventconfig) diagnostics.error('page_view_event_unconfigured', { stack: 'none' });
//     track(pageeventconfig.name, pageeventconfig.data);
//   });
// }
