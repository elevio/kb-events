import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.post('https://events.elev.io/v1/events', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.text('Ok'));
  }),

  rest.get('*', (req, res, ctx) => {
    console.error(`Please add GET request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: 'You must add request handler.' })
    );
  }),

  rest.post('*', (req, res, ctx) => {
    console.error(`Please add POST request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: 'You must add request handler.' })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
