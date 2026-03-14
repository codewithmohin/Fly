function greet(name, callback){
console.log("Hello " + name)
callback()
}

function done(){
console.log("Greeting completed")
}

greet("Rahul", done)