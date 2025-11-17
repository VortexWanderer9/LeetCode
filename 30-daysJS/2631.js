/**
 * @param {Function} fn
 * @return {Object}
 */

// mistake find >>
    // => TypeError: obj[key].push is not a function 
    // 
Array.prototype.groupBy = function(fn) {
    return this.reduce((obj, item) => {
        const key = fn(item);
        if (!obj[key]) {
            obj[key] = [];
        }
        obj[key].push(item);
        return obj;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// for each 
Array.prototype.groupBy = function(fn) {
    let obj = {}
    this.forEach((item) =>{
    const key = fn[item]
    if(!obj[key]){
        obj[key] = []
    }
    obj[key].push(item)
})
  return obj
};