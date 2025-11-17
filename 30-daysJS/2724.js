/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
// question explanation: sort the array based on the return value of the function fn
// why fn(a) - fn(b) ? because sort function compare two elements a and b
// 
var sortBy = function(arr, fn) {
     return arr.sort((a,b) => fn(a) - fn(b)) //  
};