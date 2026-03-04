const promises = [Promise.resolve(1), Promise.reject('err'), Promise.resolve(3)];
Promise.allSettled(promises).then(results => 
  console.log(results.map(r => r.status)));  // ['fulfilled', 'rejected', 'fulfilled']
