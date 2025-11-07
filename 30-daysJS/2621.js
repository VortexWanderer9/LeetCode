// Sleep

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

    function slp(t){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {resolve()}, t);
            setTimeout(() => {reject()}, t);
        })
    }