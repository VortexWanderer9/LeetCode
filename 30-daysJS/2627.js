// JS 2627 debouncing function
  function debouncing() {
    let timer;
    return function(...args){
        if(timer !== true) clearTimeout(timer)
        timer = setTimeout(() => fn(...args), t)
    } 
  }

// Real life use of debouncing function
function search(){
    console.log('Searching...')
    // Simulate an API call
    setTimeout(() => {
        console.log('Search results returned.')
    }, 1000)
    args = Array.from(arguments)
    debouncing(search, 300)(...args)
}