for(let key in statistics){
    if(key.slice(0,1) == "r" || statistics[key]%2 == 1){
        console.log(statistics[key]);
    }
}


