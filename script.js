// 12. LRU Cache (size 3)
class LRUCache {
  constructor(size) { this.size=size; this.cache={}; this.keys=[]; }
  get(key) {
    if(this.cache[key]) {
      this.keys.splice(this.keys.indexOf(key),1);
      this.keys.push(key);
      return this.cache[key];
    }
  }
  set(key,val) {
    if(this.get(key)) this.cache[key]=val;
    else {
      if(this.keys.length >= this.size) delete this.cache[this.keys.shift()];
      this.cache[key]=val; this.keys.push(key);
    }
  }
}
const cache = new LRUCache(3); cache.set('a',1); cache.set('b',2); cache.set('c',3); cache.set('d',4); console.log(cache.get('a')); // 1, evicts 'b'
