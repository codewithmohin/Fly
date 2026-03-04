function* selfYield() {
  yield* selfYield();
}
const gen = selfYield();
console.log(gen.next());  // {value: Generator, done: false} (infinite!)
