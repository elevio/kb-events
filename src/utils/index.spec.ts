import { memoize, asyncRetry, wait } from './index';

describe('memoize', () => {
  it('should only call the function once', () => {
    const func = jest.fn(() => {
      return 'abc';
    });
    const memedFunc = memoize(func);
    memedFunc();
    memedFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });
});

describe('wait', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should return a promise and resolve after time', () => {
    const p = wait(50);
    jest.advanceTimersByTime(50);
    return p;
  });
});

describe('asyncRetry', () => {
  it('should only call func once on success', async () => {
    const func = jest.fn(() => Promise.resolve('abc'));
    await expect(
      asyncRetry(func, [], { maxRetrys: 3, delay: 50 })
    ).resolves.toEqual('abc');
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should re-call func maxRetrys', async () => {
    const func = jest.fn(() => Promise.reject(new Error('Bad!')));
    await expect(
      asyncRetry(func, [], { maxRetrys: 3, delay: 50 })
    ).rejects.toThrowError('Bad!');
    expect(func).toHaveBeenCalledTimes(3);
  });

  it('test uses params', async () => {
    const func = jest.fn((a: string) => Promise.resolve(a));
    await expect(
      asyncRetry(func, ['hello'], { maxRetrys: 3, delay: 50 })
    ).resolves.toEqual('hello');
    expect(func).toHaveBeenCalledTimes(1);
  });
});
