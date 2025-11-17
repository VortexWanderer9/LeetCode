 //2722. Join Two Arrays by ID
 // solution 1: using map
    var joinArrays = function(arr1, arr2, id) {
        const map = new Map();  
        const result = [];
        
        for (const item of arr1) {
            map.set(item[id], item);
        }
        for (const item of arr2) {
            if (map.has(item[id])) {
                Object.assign(map.get(item[id]), item);
            } else {
                map.set(item[id], item);
            }
        }
        return Array.from(map.values());
    }