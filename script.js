function password(len){
let c="abcdefghijklmnopqrstuvwxyz0123456789"
let p=""
for(let i=0;i<len;i++)
p+=c[Math.floor(Math.random()*c.length)]
return p
}
console.log(password(8))