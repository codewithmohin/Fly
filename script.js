 const nested = [1, [2, [3]]];
const flat = nested.flat(Infinity);
console.log(flat);  // [1, 2, 3]
