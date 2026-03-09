function createGreeter(greeting) {
  return function(name) {
    return greeting + " " + name
  }
}