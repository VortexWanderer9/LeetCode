// 2703. Return Length of Arguments Passed

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

// this can be solve using for of loop
var argumentsLength = function(...args) {
    let i = 0
    for(arg of args) i++;
    return i
};


 argumentsLength(1, 2, 3); // 3


 // Also we can solve by simply doing the
    var argumentsLength = function(...args) {
        return args.length
    };
// argumentsLength(1, 2, 3); // 3
// also we can use arguments object
var argumentsLength = function() {
    return arguments.length
};
// argumentsLength(1, 2, 3); // 3

// Another way using reduce
var argumentsLength = function(...args) {
    return args.reduce((count) => count + 1, 0);
};

// argumentsLength(1, 2, 3); // 3

// Another way using map
var argumentsLength = function(...args) {
    let count = 0;
    args.map(() => count++);
    return count;
};

// argumentsLength(1, 2, 3); // 3

// Another way using forEach
var argumentsLength = function(...args) {
    let count = 0;
    args.forEach(() => count++);
    return count;
};

// argumentsLength(1, 2, 3); // 3

// Another way using while loop
var argumentsLength = function(...args) {
    let i = 0;
    do {
        i++;
    } while (i < args.length);
    return i;
};

// argumentsLength(1, 2, 3); // 3

// Another way using recursion
var argumentsLength = function(...args) {
    function countArgs(index) {
        if(index >= args.length) return 0;
        return 1 + countArgs(index + 1);
    }
    return countArgs(0);
}