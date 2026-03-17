// 2. Confetti burst on click (add <div id="confetti" style="position:fixed;top:0;left:0;width:100vw;height:100vh;"></div>)
document.getElementById('confetti').addEventListener('click', () => {
  for(let i=0; i<50; i++) {
    const conf = document.createElement('div');
    conf.style.cssText = `position:fixed;width:10px;height:10px;background:hsl(${Math.random()*360},100%,50%);left:${Math.random()*100}vw;top:-10px;animation:fall 3s linear forwards`;
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 3000);
  }
});
const style = document.createElement('style'); style.textContent = '@keyframes fall{to{transform:translateY(100vh) rotate(720deg);}}'; document.head.appendChild(style);
