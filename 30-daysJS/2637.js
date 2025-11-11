// 2637. Promise time timeLimit

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t){
    return function(...args){
        return new Promise((resolve, reject) =>{
            const timer = setTimeout(reject('time out'), t)
        })
    }
}