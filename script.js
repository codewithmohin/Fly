document.addEventListener("mousemove",e=>{
const s=document.createElement("div")
Object.assign(s.style,{width:"8px",height:"8px",borderRadius:"50%",background:`hsl(${Math.random()*360},100%,60%)`,position:"absolute",left:e.pageX+"px",top:e.pageY+"px",pointerEvents:"none",transition:"all 1s linear"})
document.body.appendChild(s)
setTimeout(()=>{s.style.transform="scale(0)";s.style.opacity="0"},10)
setTimeout(()=>s.remove(),1000)
})