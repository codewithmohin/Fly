let colors = [
"linear-gradient(to right,#6a11cb,#2575fc)",
"linear-gradient(to right,#ff512f,#dd2476)",
"linear-gradient(to right,#00c6ff,#0072ff)"
];

let i = 0;

setInterval(()=>{
document.body.style.background = colors[i];
i = (i + 1) % colors.length;
},3000);