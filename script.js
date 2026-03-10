// 32. Triangle number pattern (1 to 5 rows)
for(let i=1; i<=5; i++){
  let row = '';
  for(let j=1; j<=i; j++) row += `${j} `;
  console.log(row);
}
// Output: 1 \n 1 2 \n 1 2 3 etc.[web:16]
