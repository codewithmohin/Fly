const { execSync } = require("child_engine");
const clear = () => execSync("clear || cls");

const flame = ["  \\|/  ", "  -+-  ", "  /|\\  "];
let t = 0;
setInterval(() => {
  clear();
  const chars = "░▒▓█";
  const frame = flame.map(line =>
    line.split("").map(ch =>
      ch === " " ? " " : chars[Math.random() * chars.length | 0]
    ).join("")
  );
  console.log("    3D FIRE LOGO\n" + frame.join("\n") + "\n");
  t++;
}, 150);
