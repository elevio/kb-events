import { Events, SendOptions } from './events';
import * as events from './events';
import { promiseSender } from './sender';
import Batch from './batch';
import {
  setConfig,
  User,
  setLanguageId as _setLanguageId,
  setUser as _setUser,
} from './config';


/** @hidden */
const DEFAULT_EVENT_TYPE = 'web-kb-external-event';
/** @hidden */
const DEFAULT_ENDPOINT_URL = 'https://events.elev.io/v1/events';

export { events };

/** @hidden */
let batch: Batch | null;

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

  setConfig({
    companyUid,
    debugMode,
    endpointURL,
    eventType,
    isAnonMode,
  });

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

/**
 * This will set the user
 * @param user
 */
export function setUser(user: User | null) {
  _setUser(user);
}

/**
 * This will set the language id that articles + categories are currently displayed in.
 * @param languageId
 */
export function setLanguageId(languageId: string | null) {
  _setLanguageId(languageId);
}

/**
 * This is the thing that adds the event to the dispatch queue.
 * This is non-blocking.
 * @param event the event to be sent.
 * @param opts allows you to "alter" the events before being sent
 */
export function track(event: Events, opts?: SendOptions) {
  if (!batch) throw new Error('Please run setup.');
  const _event = opts ? events.alterEvent(event, opts) : event;
  batch.addEvent(_event);
}

/**
 * This sends the events without using the batching q.
 * It returns a promise so you can wait for it and will throw an error if it fails.
 * @param events the array of events to send.
 * @param opts allows you to "alter" the events before being sent
 */
export function sendNow(
  eventArray: Array<Events>,
  opts?: SendOptions
): Promise<void> {
  const _events = opts ? eventArray.map((e) => events.alterEvent(e, opts)) : eventArray;
  return promiseSender(_events);
}
