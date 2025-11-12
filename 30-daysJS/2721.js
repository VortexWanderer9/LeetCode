/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

// mist
var promiseAll = function(functions) {
  return new Promise((resolve, reject) =>{
    let arr = Array(functions.length)
    let len = functions.length
    for(let i = 0; i < len; i++){
        functions[i]().then((res) =>{
            arr[i] = result
            if(--len === 0) return resolve(arr)
        }).catch(reject)
    }
  })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */