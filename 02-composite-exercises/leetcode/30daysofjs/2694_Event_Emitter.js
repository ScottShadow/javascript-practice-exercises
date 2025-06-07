class EventEmitter {
  /**
   * @constructor
   * @property {Map} subscribers
   * @return {void}
   */
  constructor() {
    this.subscribers = new Map()
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    let current = this.subscribers.get(eventName) || []
    //console.log("test, ",callback(10))
    current.includes(callback) ? _ : current.push(callback)
    this.subscribers.set(eventName, current)
    console.log(Array.from(this.subscribers))

    //console.log(this.subscribers)
    return {
      unsubscribe: () => {
        let func = this.subscribers.get(eventName) || []
        let newfunc = func.filter(myfunc => myfunc != callback)
        this.subscribers.set(eventName, newfunc)
        //console.log(this.subscribers)
      }
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    let func = this.subscribers.get(eventName) || []
    let returnVal = func.map(myfunc => myfunc.call(null, ...args))
    //console.log(returnVal)
    return returnVal
  }
}
//console.log(Object.getOwnPropertyNames(Map.prototype))

// const emitter = new EventEmitter();
// Subscribe to the onClick event with onClickCallback

// const sub = emitter.subscribe('onClick', x => x + 2);

// emitter.emit('onClick'); // [99]
// sub.unsubscribe(); // undefined
// emitter.emit('onClick'); // []
