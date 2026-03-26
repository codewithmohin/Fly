const A = 0.04, B = 0.02;
let a = 0, b = 0;

setInterval(() => {
  let output = Array(1760).fill(" ");
  let z = Array(1760).fill(0);

  for (let j = 0; j < 6.28; j += 0.3) {
    for (let i = 0; i < 6.28; i += 0.1) {
      let c = Math.sin(i), d = Math.cos(j);
      let e = Math.sin(a), f = Math.sin(j);
      let g = Math.cos(a), h = d + 2;
      let D = 1 / (c * h * e + f * g + 5);
      let l = Math.cos(i), m = Math.cos(b);
      let n = Math.sin(b);
      let t = c * h * g - f * e;
      let x = 40 + 30 * D * (l * h * m - t * n);
      let y = 12 + 15 * D * (l * h * n + t * m);
      let o = x + 80 * y;
      let N = 8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n);

      if (y < 22 && y >= 0 && x >= 0 && x < 80 && D > z[o]) {
        z[o] = D;
        output[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
      }
    }
  }

  console.clear();
  console.log(output.join(""));
  a += A;
  b += B;
}, 50);