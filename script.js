const obj = { prop: 42 };
Object.prototype.protoProp = 99;
console.log(Object.hasOwn(obj, 'prop'));  // true
console.log(obj.hasOwnProperty('protoProp'));  // false (but prototype issue)
