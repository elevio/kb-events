import { Events } from './events';
import * as events from './events';
import { promiseSender } from './sender';
import Batch from './batch';

/** @hidden */
const DEFAULT_EVENT_TYPE = 'web-kb-external-event';
/** @hidden */
const DEFAULT_ENDPOINT_URL = 'https://events.elev.io/v1/events';
/** @hidden */
export let _languageId: string | null = null;
/** @hidden */
export let _user: User | null = null;

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

  /** How often to send events in ms, default to 50ms */
  interval?: number;

  /** For failed network sends, how many times should it be retried */
  maxRetries?: number;

  onError?: (err: Error) => void;

  /** Should we try to send the events before the page unloads, default to `true` */
  withUnload?: boolean;

  /** Test the events by printing them out */
  debugMode?: boolean;

  /** Allows you to override where the events are sent, useful for testing purposes */
  endpointURL?: string;

  /** Allows you to set a custom event type, generally not used */
  eventType?: string;

  /** See: setLanguageId, just sets the langauge the user is veiwing Elevio content in.  */
  languageId?: string;

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
    interval,
    withUnload,
    debugMode = false,
    endpointURL = DEFAULT_ENDPOINT_URL,
    eventType = DEFAULT_EVENT_TYPE,
    isAnonMode = false,
    languageId,
    onError,
    maxRetries,
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
    maxRetries,
    onError,
  });

  if (languageId) {
    setLanguageId(languageId);
  }
}

export interface User {
  id?: string;
  email: string;
}

/**
 * This will set the user
 * @param user
 */
export function setUser(user: User | null) {
  _user = user;
}

/**
 * This will set the language id that articles + categories are currently displayed in.
 * @param languageId
 */
export function setLanguageId(languageId: string | null) {
  if (languageId) {
    _languageId = languageId.toLowerCase();
  } else {
    _languageId = null;
  }
}

/**
 * Options for altering the events before they are sent.
 * `force_timestamp` will force the timestamp to allow backfilling of events.
 */
type SendOptions = {
  force_timestamp?: number;
};

function alterEvent(event: Events, opts: SendOptions): Events {
  if (opts.force_timestamp) {
    return {
      ...event,
      timestamp_created: opts.force_timestamp,
      timestamp_server: opts.force_timestamp,
    };
  }
  return event;
}

/**
 * This is the thing that adds the event to the dispatch queue.
 * This is non-blocking.
 * @param event the event to be sent.
 * @param opts allows you to "alter" the events before being sent
 */
export function track(event: Events, opts?: SendOptions) {
  if (!batch) throw new Error('Please run setup.');
  const _event = opts ? alterEvent(event, opts) : event;
  batch.addEvent(_event);
}

/**
 * This sends the events without using the batching q.
 * It returns a promise so you can wait for it and will throw an error if it fails.
 * @param events the array of events to send.
 * @param opts allows you to "alter" the events before being sent
 */
export function sendNow(
  events: Array<Events>,
  opts?: SendOptions
): Promise<void> {
  const _events = opts ? events.map((e) => alterEvent(e, opts)) : events;
  return promiseSender(_events);
}
