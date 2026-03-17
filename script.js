// 14. Emoji rain (add <div id="rain"></div>)
function emojiRain() {
  const emojis = ['🌟','🚀','💫','🔥','⚡'];
  setInterval(() => {
    const drop = document.createElement('div');
    drop.textContent = emojis[Math.floor(Math.random()*5)];
    drop.style.cssText = `position:fixed;left:${Math.random()*100}vw;top:-20px;font-size:20px;animation:drop 5s linear forwards`;
    document.body.appendChild(drop);
    setTimeout(()=>drop.remove(),5000);
  },200);
}
const s = document.createElement('style'); s.textContent='@keyframes drop{to{transform:translateY(100vh) rotate(360deg);}}'; document.head.appendChild(s); emojiRain();
