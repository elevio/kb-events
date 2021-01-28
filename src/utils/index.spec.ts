import { memoize } from './index';

it('should only call the function once', () => {
  const func = jest.fn(() => {
    return 'abc';
  });
  const memedFunc = memoize(func);
  memedFunc();
  memedFunc();
  expect(func).toHaveBeenCalledTimes(1);
});
