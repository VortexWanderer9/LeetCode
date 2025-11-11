var TimeLimitedCache = function() {
     this.cache = new Map()
    
};


/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
   const alreadyExist = this.cache.get(key);
   if(alreadyExist){
    clearTimeout(alreadyExist.timeLimitId)
   }
   let timeLimitId = setTimeout(() =>{
    this.cache.delete(key)
   })
   this.cache.set(key, {value, timeLimitId})
   return Boolean(alreadyExist)
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cache.has(key)) {
       return this.cache.get(key).value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

// let try another approach
// class 
// mis
class TimeLimitedCache {
    cache = new Map()

    set(key, value, duration){
        const alreadyExist = this.cache.get(key)
        if(alreadyExist){
            clearTimeout(alreadyExist.timeoutId)
        }
        let timeoutId = setTimeout(() =>{
            this.cache.delete(key)
        }, duration)

        this.cache.set(key, {value, timeoutId})
        return Boolean(alreadyExist)
    }

    get(key){
        if(this.cache.has(key))
        return this.cache.get(key).value
    }
    count(){
        return this.cache.size;
    }
}
/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */