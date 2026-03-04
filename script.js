const setA = new Set([1,2,3]);
const setB = new Set([2,3,4]);
const union = new Set([...setA, ...setB]);  // Proposal: setA.union(setB)
console.log(union);  // Set {1,2,3,4}
