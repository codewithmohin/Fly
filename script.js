const users = [{name: 'Mohin', city: 'Mysuru'}, {name: 'Alice', city: 'Mysuru'}];
const byCity = users.groupBy(u => u.city);
console.log(byCity.Mysuru);  // [{name: 'Mohin', city: 'Mysuru'}, {name: 'Alice', city: 'Mysuru'}]
