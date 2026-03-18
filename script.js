const user = { profile: { name: 'Mohin', age: 25 } };
const { profile: { name = 'Guest', age = 0 } } = user;
console.log(name, age); // Mohin 25
