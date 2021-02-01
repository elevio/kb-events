import { createEvent } from './types';
import { setup } from './index';

describe('types', () => {
  beforeEach(() => {
    setup({
      companyUid: 'company_123',
    });
  });

  it('adds event_name', () => {
    const e = createEvent('asdf');
    expect(e).toMatchObject({
      event_name: 'asdf',
    });
  });

  it('adds the context', () => {
    const e = createEvent('with_context', {
      one: 'two',
      three: 3,
    });
    expect(e).toMatchObject({
      one: 'two',
      three: 3,
    });
  });

  it('calls getAll', () => {
    const e = createEvent('with_context', { one: 'two', three: 3 });
    expect(e).toMatchObject({
      customer_uid: 'company_123',
    });
  });
});
