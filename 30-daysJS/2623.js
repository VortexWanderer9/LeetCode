// 2623. Memoize
// https://leetcode.com/problems/memoize/

/**
 * @template T
 * @param {(...args: any[]) => T} fn
 * @return {(...args: any[]) => T}
 */
var memoize = function(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};
 
// how this actually works
/**
 * function to be memoized
 */
function add(a, b) {
    console.log('Computing...');
    return a + b;
}