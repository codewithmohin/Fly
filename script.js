// 7. Password strength checker
function strength(pass) {
  let score = 0;
  if(pass.length>8) score++; if(/[A-Z]/.test(pass)) score++;
  if(/[0-9]/.test(pass)) score++; if(/[^a-zA-Z0-9]/.test(pass)) score++;
  return ['Weak','Fair','Good','Strong'][score] || 'Weak';
}
console.log(strength('P@ssw0rd123'));
