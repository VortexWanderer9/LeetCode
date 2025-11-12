

let chunk = (arr, size) =>{
    let res = []
    for(let i = 0; i < arr.length; i += size){
        res.push(arr.slice(i, i + size))
    }
    return res
}

// how it work 
// = > chunk([1,2,3,4,5], 2)
// = > [[1,2], [3,4], [5]]
// 