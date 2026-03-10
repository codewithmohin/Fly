// 15. Array reverse without reverse()
function revArr(arr) { return arr.reduce((a,v)=>[v,...a],[]); } console.log(revArr([1,2,3])); // [3,2,1][web:8]
