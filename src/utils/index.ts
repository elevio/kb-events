export function memoize<A extends () => any>(func: A): A {
  let result: ReturnType<A>;
  return (() => {
    if (!result) result = func();
    return result;
  }) as A;
}
