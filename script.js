const privateData = new WeakMap();
class Secret {
  constructor() {
    privateData.set(this, { hidden: 42 });
  }
  getHidden() { return privateData.get(this).hidden; }
}
