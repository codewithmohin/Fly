// 1. Animated circle (needs <canvas id="c" width="200" height="200"></canvas>)
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
let angle = 0;
function draw() {
  ctx.clearRect(0,0,200,200);
  ctx.beginPath();
  ctx.arc(100,100,50+20*Math.sin(angle),0,Math.PI*2);
  ctx.fillStyle = `hsl(${angle*2},50%,50%)`;
  ctx.fill();
  angle += 0.05;
  requestAnimationFrame(draw);
}
draw();
