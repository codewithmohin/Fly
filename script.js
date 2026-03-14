let inputs = document.querySelectorAll("input, textarea, select");

inputs.forEach(i=>{
i.addEventListener("focus",()=>{
i.style.boxShadow = "0 0 10px #2575fc";
i.style.transition = "0.3s";
});

i.addEventListener("blur",()=>{
i.style.boxShadow = "none";
});
});