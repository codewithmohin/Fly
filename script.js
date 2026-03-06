<canvas id="c"></canvas>
<script>
const c=document.getElementById("c")
const ctx=c.getContext("2d")
c.width=innerWidth
c.height=innerHeight

let a=0

function draw(){
ctx.clearRect(0,0,c.width,c.height)

ctx.save()
ctx.translate(c.width/2,c.height/2)
ctx.rotate(a)
ctx.fillRect(-50,-50,100,100)
ctx.restore()

a+=0.02
requestAnimationFrame(draw)
}

draw()
</script>