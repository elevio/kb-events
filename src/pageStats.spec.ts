import { getAll } from './pageStats';
import { setup } from './index';

describe('pageStats', () => {
  beforeEach(() => {
    setup({
      companyUid: 'company_456',
    });
  });

  it('should add company_uid', () => {
    const data = getAll();
    expect(data).toMatchObject({
      customer_uid: 'company_456',
    });
  });
});
