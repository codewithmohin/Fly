const flatten = a => a.flat(Infinity);
console.log(flatten([1,[2,[3,4],5]]));