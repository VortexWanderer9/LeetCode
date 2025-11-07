// 2716. Minimize String Length
var minimizedStringLength = function(s) {
    let uniqueChars = new Set(s);
    return uniqueChars.size;
};
// another approach
var minimizedStringLength = function(s) {
    let charMap = {};
    for(let char of s){
        charMap[char] = true;
    }
    return Object.keys(charMap).length;
}

// another approach
var minimizedStringLength = function(s) {
    return s.split('').filter((char, index, arr) => arr.indexOf(char) === index).length;
}

// another approach
var minimizedStringLength = function(s) {
    return [...new Set(s)].length;
}

// another approach
var minimizedStringLength = function(s) {
    let uniqueChars = [];
    for(let char of s){
        if(!uniqueChars.includes(char)){
            uniqueChars.push(char);
        }
    }
    return uniqueChars.length;
}