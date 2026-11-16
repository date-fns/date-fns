export function promiseQueue<Type>(
  promises: Array<() => Promise<Type>>,
  max: number,
): Promise<Type[]> {
  const queue: Array<() => void> = [];

  const all = Promise.all<Type>(
    new Array(promises.length).fill(null).map((_, index) => {
      const promise = new Promise<void>((resolve) => {
        queue[index] = () => {
          // Trigger the queue promise
          resolve();
          // Return it, so the worker function can wait for
          return promise;
        };
      }).then(() => promises[index]());
      return promise;
    }),
  );

  async function next() {
    const promise = queue.shift();
    if (!promise) return;
    await promise();
    return next();
  }

  // Create the worker functions
  Promise.all(new Array(max).fill(null).map(() => next()));

  return all;
}
