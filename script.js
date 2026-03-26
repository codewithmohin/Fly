const { execSync } = require("child_process");
const clear = () => execSync("clear || cls");

let y = 5, dy = 1;
setInterval(() => {
  clear();
  let s = Array(10).fill(0).map((_, i) =>
    i === y ? "      🏀 3D BALL" : "            "
  ).join("\n");
  console.log(s);
  y += dy;
  if (y <= 0 || y >= 9) dy = -dy;
}, 200);
