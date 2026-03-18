const promises = [
  Promise.resolve(1),
  Promise.reject('Error'),
  Promise.resolve(3)
];
Promise.allSettled(promises).then(results => 
  console.log(results.map(r => ({ status: r.status, value: r.value || r.reason })))
);
// [{status: 'fulfilled', value: 1}, {status: 'rejected', value: 'Error'}, ...]
