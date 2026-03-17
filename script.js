// 11. Typewriter effect (add <p id="type"></p>)
function typeWrite(text, el=document.getElementById('type'), speed=50) {
  let i=0;
  function type() { if(i<text.length) { el.textContent += text[i++]; setTimeout(type,speed); } }
  type();
}
typeWrite('Hello Unique JS!');
