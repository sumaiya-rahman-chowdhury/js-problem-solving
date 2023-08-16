function canPay(changeArray, totalDue) {
    let sum = 0 ;
    if(changeArray.length === 0){
        return "Please put element"
    }
    for(let i=0; i<changeArray.length; i++){
       
        sum = sum + changeArray[i];

    }
    
return sum>totalDue ;
    
}


console.log(canPay([1,5,5], 10 ));