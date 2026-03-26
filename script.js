const { execSync } = require("child_process");
const clear = () => execSync("clear || cls");

let rows = Array(20).fill(0).map(() => Math.random() * 80 | 0);

setInterval(() => {
  clear();
  let s = Array(20).fill(".").map((_, i) =>
    " ".repeat(rows[i] | 0) + "★"
  ).join("\n");
  console.log(s);
  rows = rows.map((x) => (x + 3 + Math.random() * 6) % 80);
}, 200);
