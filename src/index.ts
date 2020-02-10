import { Events } from './events';
import * as events from './events';
import { promiseSender, getSender } from './sender';
import Batch from './batch';

export { events };

let batch: Batch | null;
export type User = {
  id?: string;
  email: string;
};

export let _company_uid: string | null = null;
export let _isAnonMode: boolean = false;
export let _debugMode: boolean = false;
export let _user: User | null = null;

type Opts = {
  /** The companyUid from Elevio */
  companyUid: string;

  /** How often to send events in ms, default to 500ms */
  interval?: number;

  /** Should we try to send the events before the page unloads, default to `true` */
  withUnload?: boolean;

  /** Test the events by printing them out */
  debugMode?: boolean;
};

/**
 * Instantiates and configures the analytics sender.
 *
 * @param opts see {@link Opts}
 */
export function setup({ companyUid, interval, withUnload, debugMode }: Opts) {
  _company_uid = companyUid;
  _debugMode = debugMode ?? _debugMode;
  batch = new Batch({
    interval,
    withUnload,
    handler: getSender(),
  });
}

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
