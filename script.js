const ball=document.createElement("div")
Object.assign(ball.style,{width:"50px",height:"50px",background:"red",borderRadius:"50%",position:"absolute"})
document.body.appendChild(ball)
let x=0,y=0,dx=3,dy=3
function move(){
x+=dx
y+=dy
if(x>window.innerWidth-50||x<0)dx*=-1
if(y>window.innerHeight-50||y<0)dy*=-1
ball.style.transform=`translate(${x}px,${y}px)`
requestAnimationFrame(move)
}
move()