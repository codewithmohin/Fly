const { execSync } = require("child_process");
const clear = () => execSync("clear || cls");

let t = 0;
setInterval(() => {
  clear();
  let s = Array(8).fill(0).map((_, i) => {
    const r = Math.PI * (i + t) / 6;
    const x = Math.round(20 + 15 * Math.cos(r));
    return " ".repeat(x) + "✨ JS MAGIC";
  }).join("\n");
  console.log(s);
  t += 0.1;
}, 100);
