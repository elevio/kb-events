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
