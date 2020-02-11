import { getAll } from './pageStats';

export interface BaseEvent {
  customer_uid: string;
  // user_uid?: string;
  // user_loggedin: boolean;
  timestamp_created: number;

  // These comes from pageStats.getAll
  page_document_size_height?: number;
  page_document_size_width?: number;
  page_page_offset_left?: number;
  page_page_offset_top?: number;
  page_title?: string;
  page_viewport_height?: number;
  page_viewport_width?: number;
  page_language?: string;
  page_timezone_offset?: number;
  page_timezone_string?: string;
  page_url?: string;
  page_referrer?: string;

  // These are removed in anon mode
  // app_page_url?: string;
  user_id_external?: string;
  // user_email?: string;
  // user_groups?: Array<string>;
  custom_attributes?: object | string | number;
}

export type Event<T extends string> = {
  event_name: T;
} & BaseEvent;

// An action with a payload.
export type EventWithContext<T extends string, C extends object> = Event<T> & C;

type FunctionType = (...args: any[]) => any;

// This extracts the action types from the map of action creator functions.
export type EventsUnion<A extends FunctionType> = ReturnType<A>;

type BaseContext = {
  [T: string]: string | object | undefined | number;
  custom_attributes?: string | object | number;
};

// This function creates an action either with a payload or not and retains it's
// type information
export function createEvent<T extends string>(eventName: T): Event<T>;
export function createEvent<T extends string, C extends BaseContext>(
  eventName: T,
  context: C
): EventWithContext<T, C>;
export function createEvent<T extends string, C extends BaseContext>(
  eventName: T,
  context?: C
): Event<T> | EventWithContext<T, C> {
  // This is what fill's in the basic event details.
  let myContext = context || {};
  return {
    ...getAll(),
    ...myContext,
    event_name: eventName,
  };
}
