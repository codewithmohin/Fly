// 13. Stack with max
class StackWithMax {
  constructor() { this.items=[]; this.maxs=[]; }
  push(val) {
    this.items.push(val);
    this.maxs.push(this.maxs.length ? Math.max(this.maxs[this.maxs.length-1], val) : val);
  }
  pop() { this.items.pop(); this.maxs.pop(); }
  max() { return this.maxs[this.maxs.length-1]; }
}
