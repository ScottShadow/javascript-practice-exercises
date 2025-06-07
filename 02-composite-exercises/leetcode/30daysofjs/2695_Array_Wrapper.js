/**
 * @param {number[]} nums
 * @property {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums
  console.log(`nums added ${this.nums}`)
};

//console.log(Object.getOwnPropertyNames(Set));
//console.log(Object.getOwnPropertyNames(Array.prototype));
// console.log(Object(Array.prototype.map).toString())
// console.log(structuredClone({hello:"hello"}))
/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((acc, val) => acc + val, 0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return "[" + this.nums.toString() + "]"
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
