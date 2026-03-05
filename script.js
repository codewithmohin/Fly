for(let i=0;i<30;i++){
const c=document.createElement("div")
Object.assign(c.style,{width:"20px",height:"20px",borderRadius:"50%",position:"absolute",background:`hsl(${Math.random()*360},70%,60%)`,left:Math.random()*window.innerWidth+"px",top:Math.random()*window.innerHeight+"px"})
document.body.appendChild(c)
let dy=Math.random()*2+1
function float(){
let y=parseFloat(c.style.top)
y-=dy
if(y<0)y=window.innerHeight
c.style.top=y+"px"
requestAnimationFrame(float)
}
float()
}