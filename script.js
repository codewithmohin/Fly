const shuffle = arr => arr.sort(() => 0.5 - Math.random());
console.log(shuffle([1, 2, 3, 4, 5])); // e.g., [3, 1, 5, 2, 4]
