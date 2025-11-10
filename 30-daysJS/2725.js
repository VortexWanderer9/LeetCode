// 2725 Interval Cancellation
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args)
    function cancel() {
        clearInterval(timer)
    }
 
 let timer = setInterval(() =>{
    fn(...args)
  }, t) ;
  return cancel

};

// Example 1:
let cancelCallback = function(fn, args, t) {
    fn(...args);
    let intervalId = setInterval(() => {
        fn(...args);
    }, t);
    return function() {
        clearInterval(intervalId);
    };
}

// another way to do it




var cancellable = function(fn, args, t) {
    fn(...args);
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);
    return () => clearInterval(intervalId);
}