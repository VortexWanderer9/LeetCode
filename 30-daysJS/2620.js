// 2620 Counter
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n // store n value to count
    return function() {
      return count++ // increment count and return the previous value
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */