let btn = document.querySelector("button");

setInterval(()=>{
btn.style.transform = "scale(1.1)";
setTimeout(()=>{
btn.style.transform = "scale(1)";
},300);
},2000);