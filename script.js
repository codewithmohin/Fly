// 4. Rock-Paper-Scissors vs AI
function play(choice) {
  const options = ['rock','paper','scissors'];
  const ai = options[Math.floor(Math.random()*3)];
  const win = (p,a) => p===a ? 'tie' : (p==='rock'&&a==='scissors')||(p==='paper'&&a==='rock')||(p==='scissors'&&a==='paper');
  return win(choice,ai) ? `You win! AI: ${ai}` : 'AI wins!';
}
console.log(play('rock'));
