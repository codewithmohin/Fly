// 17. Music note sequencer (Web Audio API)
const audioCtx = new (window.AudioContext||window.webkitAudioContext)();
function playNote(freq,dur=0.5) {
  const osc = audioCtx.createOscillator(); osc.frequency.value=freq; osc.connect(audioCtx.destination); osc.start(); setTimeout(()=>osc.stop(),dur*1000);
}
playNote(261.63); // C4
