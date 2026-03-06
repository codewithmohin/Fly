function palindrome(n){
let s=n.toString()
return s===s.split('').reverse().join('')
}
console.log(palindrome(121))