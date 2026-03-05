const ball = document.createElement("div")
ball.style.width = "50px"
ball.style.height = "50px"
ball.style.background = "red"
ball.style.borderRadius = "50%"
ball.style.position = "fixed"
document.body.appendChild(ball)

let x = 100
let y = 100
let dx = 3
let dy = 3

function move(){
x += dx
y += dy

if(x > window.innerWidth - 50 || x < 0) dx *= -1
if(y > window.innerHeight - 50 || y < 0) dy *= -1

ball.style.left = x + "px"
ball.style.top = y + "px"

requestAnimationFrame(move)
}

move()