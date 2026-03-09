function once(callback){
  let called=false
  return function(...args){
    if(!called){
      called=true
      return callback(...args)
    }
  }
}