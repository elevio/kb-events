import Batch from './batch';
import * as events from './events';
import { setup } from './index';
import { server, rest } from '../testServer';

describe('Batch', () => {
  beforeEach(() => {
    setup({
      companyUid: 'company_123',
    });
    // jest.useFakeTimers();
  });

  // afterEach(() => {
  //   jest.runOnlyPendingTimers();
  //   jest.useRealTimers();
  // });

  it('adds events to the queue', () => {
    const b = new Batch({ interval: 50 });
    const e = events.pageViewArticle('123', 'title');
    b.addEvent(e);
    expect(b.queue).toHaveLength(1);

    b.addEvent(e);
    expect(b.queue).toHaveLength(2);
  });

  describe('Timer', () => {
    it('starts timer after adding an event', () => {
      const b = new Batch({ interval: 50 });

      expect(typeof b._timer).toBe('undefined');
      const e = events.pageViewArticle('123', 'title');
      b.addEvent(e);
      expect(typeof b._timer).toBe('number');
    });

    it('restarts after adding event', async () => {
      const b = new Batch({ interval: 50 });

      const e = events.pageViewArticle('123', 'title');
      b.addEvent(e);
      await b.flush();
      expect(typeof b._timer).toBe('undefined');

      b.addEvent(e);
      expect(typeof b._timer).toBe('number');
    });

    it('cancelTimer, will cancel the timer', () => {
      let hasCalled = false;
      server.use(
        rest.post('https://events.elev.io/v1/events', (_req, res, ctx) => {
          hasCalled = true;
          return res(ctx.status(200), ctx.text('Ok'));
        })
      );

      const b = new Batch({ interval: 500 });

      const e = events.pageViewArticle('123', 'title');
      b.addEvent(e);

      b.cancelTimer();
      expect(typeof b._timer).toBe('undefined');

      jest.runAllTimers();
      expect(hasCalled).toBe(false);
    });
  });

  it('flushes events after timer', async () => {
    let dataReceived = undefined;
    server.use(
      rest.post('https://events.elev.io/v1/events', (req, res, ctx) => {
        dataReceived = req.body;
        return res(ctx.status(200), ctx.text('Ok'));
      })
    );

    const b = new Batch({ interval: 50 });
    const e = events.pageViewArticle('123', 'title');
    b.addEvent(e);

    jest.runAllTimers();
    // Give the requests a chance to fire off
    await Promise.resolve();

    expect(dataReceived).toMatchObject({
      events: JSON.parse(JSON.stringify([e])),
    });
    expect(b.queue).toHaveLength(0);
    expect(typeof b._timer).toBe('undefined');
  });

  it('flushes events on page unload, if enabled', async () => {
    let dataReceived = undefined;
    server.use(
      rest.post('https://events.elev.io/v1/events', (req, res, ctx) => {
        dataReceived = req.body;
        return res(ctx.status(200), ctx.text('Ok'));
      })
    );

    const b = new Batch({ interval: 50 });
    const e = events.pageViewArticle('123', 'title');
    b.addEvent(e);

    window.dispatchEvent(new Event('unload'));
    // Give the requests a chance to fire off
    await Promise.resolve();

    expect(dataReceived).toMatchObject({
      events: JSON.parse(JSON.stringify([e])),
    });
  });

  it.only('calls the error handler if events fail to send', async () => {
    server.use(
      rest.post('https://events.elev.io/v1/events', (_req, res, ctx) => {
        console.log('HERE...........');
        return res(ctx.status(500, 'ERROR'));
      })
    );

    const fn = jest.fn(() => {});
    const b = new Batch({ interval: 50, onError: fn, maxRetries: 1 });
    const e = events.pageViewArticle('123', 'title');
    b.addEvent(e);

    // Give the requests a chance to fire off
    // jest.runAllTimers();
    // await Promise.resolve();
    await b.flush();

    expect(fn).toBeCalledWith('asdf');
  });
});
