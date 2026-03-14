gsap.from(".container",{
y:-100,
opacity:0,
duration:1
})

gsap.from("input,select,textarea,button",{
opacity:0,
y:30,
duration:1,
stagger:0.1,
delay:0.5
})