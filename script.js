const { execSync } = require("child_process");
const clear = () => execSync("clear || cls");

const shapes = [
  "  ╭─────╮  ",
  "  │  3D │  ",
  "  ╰─────╯  ",
];

let t = 0;
setInterval(() => {
  clear();
  const r = t % 4;
  const rotated = [
    shapes[r % 2],
    shapes[(r + 1) % 2],
    shapes[(r + 2) % 2],
    shapes[(r + 3) % 2],
  ];
  console.log(rotated.join("\n"));
  t++;
}, 300);
