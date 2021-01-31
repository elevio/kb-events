import { Events } from './events';
import { promiseSender, beaconSender } from './sender';
import { asyncRetry } from './utils';

/** @hidden */
const DEFAULT_INTERVAL = 50;

/** @hidden */
const DEFAULT_RETRYS = 3;

type ConstructorOpts = {
  interval?: number;
  withUnload?: boolean;
  maxRetries?: number;
  onError?: (err: Error) => void;
};

class Batch {
  /**
   * The list of events that are to be sent.
   */
  queue: Array<Events> = [];

  private _intervalTime: number;
  private _maxRetries: number;
  _timer: undefined | number;
  private _onError?: (err: Error) => void;

  /**
   * @param opts allows us to change the behavior of the batching.
   * NOTE: all options contain defaults.
   */
  constructor(opts: ConstructorOpts = {}) {
    const {
      interval = DEFAULT_INTERVAL,
      withUnload = true,
      maxRetries: retryNumber = DEFAULT_RETRYS,
      onError,
    } = opts;
    this._intervalTime = interval;
    this._maxRetries = retryNumber;
    this._onError = onError;

    // This is we watch for the window unload event.
    if (withUnload) {
      // Using both events here to maximise compatibilty, doesn't matter if both fire.
      document.addEventListener('visibilitychange', () => this.onUnload());
      window.addEventListener('unload', () => this.onUnload(), false);
    }
  }

  startTimer() {
    // Already have a timer running.
    if (this._timer) return;
    this._timer = window.setTimeout(() => this.flush(), this._intervalTime);
  }

  cancelTimer() {
    if (this._timer) window.clearTimeout(this._timer);
    this._timer = undefined;
  }

  /**
   * Adds an event the the queue
   * @param event The event to add to the queue.
   */
  addEvent(event: Events) {
    this.queue.push(event);
    this.startTimer();
  }

  /**
   * Sends all of the current queue to the 'handler' func.
   */
  async flush() {
    this._timer = undefined;
    if (this.queue.length === 0) return Promise.resolve();

    this._maxRetries;

    const events = this.queue;
    this.queue = [];

    try {
      await asyncRetry(promiseSender, [events, false], {
        maxRetrys: this._maxRetries,
        delay: this._intervalTime,
      });
    } catch (error) {
      this._onError && this._onError(error);
    }
  }

  /**
   * When the page is unmounting fire off all events as fast as possible, if XHR use sync mode.
   */
  onUnload() {
    if (!!navigator.sendBeacon) {
      beaconSender(this.queue);
    } else {
      promiseSender(this.queue, true);
    }
  }
}

export default Batch;
