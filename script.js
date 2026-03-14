let form = document.querySelector(".container");

form.style.transform = "translateY(-100px)";
form.style.opacity = "0";

window.onload = function(){
setTimeout(()=>{
form.style.transition = "1s";
form.style.transform = "translateY(0)";
form.style.opacity = "1";
},200);
}; 