export function memoize<A extends () => any>(func: A): A {
  let result: ReturnType<A>;
  let hasCalled = false;
  return (() => {
    if (!hasCalled) {
      hasCalled = true;
      result = func();
    }
    return result;
  }) as A;
}

export function wait(time: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(res, time);
  });
}

type AsyncRetrysOpts = {
  maxRetrys?: number;
  delay?: number;
};

type Arr = readonly unknown[];
export async function asyncRetry<ReturnVal, Params extends Arr>(
  fn: (...args: [...Params]) => Promise<ReturnVal>,
  args: Params,
  { maxRetrys = 3, delay = 0 }: AsyncRetrysOpts
): Promise<ReturnVal> {
  // just a default error value, not actually used.
  let error: Error = new Error('Too many attempts');

  for (let i = 0; i < maxRetrys; i++) {
    try {
      const result = await fn(...args);
      return result;
    } catch (err) {
      // this error will be ignored if we are retrying
      // or thrown if out of retries.
      error = err;
      await wait(delay);
    }
  }
  throw error;
}
