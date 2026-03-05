const text="Hi, I'm Mohin 👋"
let i=0
function type(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i)
i++
setTimeout(type,80)
}
}
type()

const grid=document.getElementById("grid")

for(let i=0;i<364;i++){
const cell=document.createElement("div")
cell.classList.add("cell")

const r=Math.floor(Math.random()*5)

if(r===1)cell.classList.add("level1")
if(r===2)cell.classList.add("level2")
if(r===3)cell.classList.add("level3")
if(r===4)cell.classList.add("level4")

grid.appendChild(cell)
}