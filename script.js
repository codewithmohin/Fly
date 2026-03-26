const { execSync } = require("child_process");
const clear = () => execSync("clear || cls");

let t = 0;
setInterval(() => {
  clear();
  const msg = "JAVASCRIPT 3D MAGIC";
  let s = "";
  for (let i = 0; i < 6; i++) {
    const offset = Math.sin((i + t) * 0.3) * 10 | 0;
    const line = " ".repeat(offset + 10) + msg;
    s += line + "\n";
  }
  console.log(s);
  t += 0.1;
}, 100);
