// 3. Snake game segment (console arrows, run loop)
let snake = [{x:5,y:5}], dir = {x:1,y:0}, food = {x:10,y:10};
function update() {
  let head = {x:snake[0].x+dir.x, y:snake[0].y+dir.y};
  snake.unshift(head);
  if(head.x === food.x && head.y === food.y) food = {x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)};
  else snake.pop();
  console.clear(); console.log('Snake:', snake, 'Food:', food);
}
setInterval(update, 200); // Use process.stdin for real input
