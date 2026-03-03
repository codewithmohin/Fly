let text = "javascript";
let count = text.match(/[aeiou]/gi)?.length || 0;
console.log(count);