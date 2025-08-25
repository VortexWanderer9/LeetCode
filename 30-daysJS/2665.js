// 2665. Counter II
// https://leetcode.com/problems/counter-ii/
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

let createCounter = (init) => {
    let count = init;
    return {
        increment: () => ++count, // Increment the counter
        decrement: () => --count, // Decrement the counter
        reset: () => count = init // Reset the counter
    }
}
