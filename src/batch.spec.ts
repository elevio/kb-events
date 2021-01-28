import Batch from './batch';
import * as events from './events';
import { setup } from './index';

describe('Batch', () => {
  beforeEach(() => {
    setup({
      companyUid: 'company_123',
    });
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('adds events to the queue', () => {
    const handler = jest.fn(() => {});
    const b = new Batch({ interval: 500, handler });
    const e = events.pageViewArticle('123', 'title');
    b.addEvent(e);
    expect(b.queue).toHaveLength(1);

    b.addEvent(e);
    expect(b.queue).toHaveLength(2);
  });

  describe('Timer', () => {
    it('starts timer after adding an event', () => {
      const handler = jest.fn(() => {});
      const b = new Batch({ interval: 500, handler });

      expect(typeof b._timer).toBe('undefined');
      const e = events.pageViewArticle('123', 'title');
      b.addEvent(e);
      expect(typeof b._timer).toBe('number');
    });

    it('restarts after adding event', () => {
      const handler = jest.fn(() => {});
      const b = new Batch({ interval: 500, handler });

      const e = events.pageViewArticle('123', 'title');
      b.addEvent(e);
      b.flush(false);

      expect(typeof b._timer).toBe('undefined');
      b.addEvent(e);
      expect(typeof b._timer).toBe('number');
    });

    it('cancel timer, will cancel the timer', () => {
      const handler = jest.fn(() => {});
      const b = new Batch({ interval: 500, handler });

      const e = events.pageViewArticle('123', 'title');
      b.addEvent(e);

      b.cancelTimer();
      expect(typeof b._timer).toBe('undefined');

      jest.runAllTimers();
      expect(handler).toBeCalledTimes(0);
    });
  });

  it('flushes events after timer', () => {
    const handler = jest.fn(() => {});
    const b = new Batch({ interval: 500, handler });
    const e = events.pageViewArticle('123', 'title');
    b.addEvent(e);

    jest.runOnlyPendingTimers();
    expect(handler).toBeCalledWith(expect.arrayContaining([e]), false);
    expect(b.queue).toHaveLength(0);
    expect(typeof b._timer).toBe('undefined');
  });

  it('flushes events on page unload, if enabled', () => {
    const handler = jest.fn(() => {});
    const b = new Batch({ interval: 500, handler });
    const e = events.pageViewArticle('123', 'title');
    b.addEvent(e);

    window.dispatchEvent(new Event('unload'));

    expect(handler).toBeCalledWith(expect.arrayContaining([e]), true);
  });
});
