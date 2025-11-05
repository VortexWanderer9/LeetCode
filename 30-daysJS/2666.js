// 2666. Allow One Function Call
function allowOneFunctionCall(fn) {
    let called = false;
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    };
}
