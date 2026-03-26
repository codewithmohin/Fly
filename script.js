const { execSync } = require("child_process");
const clear = () => execSync("clear || cls");

let z = 0;
setInterval(() => {
  clear();
  let s = "";
  for (let i = 0; i < 10; i++) {
    const dist = Math.abs(i - z % 10);
    const char = " ".repeat(dist) + "🔷" + " ".repeat(10 - dist);
    s += char + "\n";
  }
  console.log(s);
  z += 1;
}, 150);
