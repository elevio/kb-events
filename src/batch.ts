import { Events } from './events';

type ConstructorOpts = {
  interval: number;
  withUnload?: boolean;
  handler: (events: Array<Events>, isSync: boolean) => void;
};

class Batch {
  /**
   * The list of events that are to be sent.
   */
  queue: Array<Events> = [];

  /**
   * Accepts an array of events and 'handles' them.
   */
  handler: (events: Array<Events>, isSync: boolean) => void;
  private _intervalTime: number;
  _timer: undefined | number;

  /**
   * @param opts allows us to change the behavior of the batching.
   * NOTE: all options contain defaults.
   */
  constructor(opts: ConstructorOpts) {
    const { interval, handler, withUnload = true } = opts;
    this._intervalTime = interval;
    this.handler = handler;

    // This is we watch for the window unload event.
    if (withUnload)
      window.addEventListener('unload', () => this.flush(true), false);
  }

  startTimer() {
    // Already have a timer running.
    if (this._timer) return;

    this._timer = window.setInterval(
      () => this.flush(false),
      this._intervalTime
    );
  }

  cancelTimer() {
    if (this._timer) window.clearInterval(this._timer);
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
  flush(isSync: boolean) {
    if (this.queue.length === 0) return;
    // TODO: this line can crash. So it will be in a loop.
    this.handler(this.queue, isSync);
    this.queue = [];
    this.cancelTimer();
  }
}

export default Batch;
