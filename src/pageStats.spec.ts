import { getAll } from './pageStats';
import { setup, setUser } from './index';

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

  it('should add user_isloggedin', () => {
    let data = getAll();
    expect(data).toMatchObject({
      user_loggedin: false,
    });

    setUser({
      email: 'test@test.com',
    });
    data = getAll();
    expect(data).toMatchObject({
      user_loggedin: true,
    });

    // reset user
    setUser(null);
  });
});
