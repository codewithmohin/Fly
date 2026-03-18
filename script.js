const users = [{id:1, active:true}, {id:2, active:false}];
const activeIds = users
  .filter(u => u.active)
  .map(u => u.id)
  .find(id => id > 0);
console.log(activeIds); // 1
