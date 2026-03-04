const { promise, resolve, reject } = Promise.withResolvers();
setTimeout(() => resolve('Done!'), 1000);
promise.then(console.log);  // 'Done!' after 1s
