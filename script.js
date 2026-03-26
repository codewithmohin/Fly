const { execSync } = require("child_process");
const clear = () => execSync("clear || cls");

const chars = "0123456789@#$%^&*";
let cols = Array.from({ length: 40 }, () => 0);
setInterval(() => {
  clear();
  let s = Array(20).fill(0).map((_, y) =>
    cols.map((x, cx) => x === y ? chars[Math.random() * chars.length | 0] : " ").join("")
  ).join("\n");
  console.log(s);
  cols = cols.map((x) => (x + 1 + Math.random() * 2) % 20 | 0);
}, 200);
