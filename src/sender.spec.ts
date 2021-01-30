import { formatData, promiseSender } from './sender';
import { setup } from './index';
import { Events, pageViewIndex, pageViewArticle } from './events';
import { server, rest } from '../testServer';

let events: Array<Events>;

describe('Sender', () => {
  beforeEach(() => {
    setup({
      companyUid: 'company_456',
    });
    events = [pageViewIndex(), pageViewArticle('art123', 'article title')];
  });

  it('formatData correctly formats event payload', () => {
    const formatted = formatData(events);

    expect(JSON.parse(formatted)).toMatchObject({
      type: 'web-kb-external-event',
      // JSON.strigify removes 'undefined' values
      events: JSON.parse(JSON.stringify(events)),
    });
  });

  it('promiseSender resolves promise on send success', async () => {
    expect(promiseSender(events)).resolves.toBe(undefined);
  });

  it('promiseSender rejects promise on send failure', () => {
    server.use(
      rest.post('https://events.elev.io/v1/events', (_req, res, ctx) => {
        return res(ctx.status(500, 'Sorry there has been an issue'));
      })
    );
    expect(promiseSender(events)).rejects.toMatchObject({
      status: 500,
      statusText: 'Sorry there has been an issue',
    });
  });
});
