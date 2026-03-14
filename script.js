document.body.style.opacity = 0;

window.onload = function(){
let op = 0;
let fade = setInterval(function(){
if(op >= 1){
clearInterval(fade);
}
document.body.style.opacity = op;
op += 0.05;
},30);
};