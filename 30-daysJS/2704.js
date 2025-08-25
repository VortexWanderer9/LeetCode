// 2704 To Be Or Not To Be

/**
 * @param {string} val
 * @return {Object}
 */

// solution

let expect = (val) =>{
    return {
        toBe:(n) =>{
            if(val === n) return true;
            throw new Error("Not Equal");
        },
        notToBe: (n) =>{
            if(val !==n) return true;
            throw new Error("Equal");
        }
    }
}


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */