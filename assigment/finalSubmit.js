function cubeNumber(number) {
    if(typeof number !== "number"){
        return "provide a number"
    }
    let output = number*number*number ;
    return output ;

}

function matchFinder(string1, string2) {
    if(typeof string1 !== "string" ){
        return "provide an string"
    }
    else if(typeof string2 !== "string"){
        return "provide an string"
    }
    if(string1.includes(string2))
    {
        return true ;
    }
    else{
        return false ;
    }

}


function sortMaker(arr) {
   
    let firstLgNum = arr[0];
    let secondLgNum = arr[1];
    let max = 0;
    if(firstLgNum<0){
        return "Invalid Input"
    }
    else if(secondLgNum<0){
        return "Invalid Input"
    }
    else if(firstLgNum === secondLgNum){
        return "equal"
    }
    if (firstLgNum < secondLgNum) {
        max = firstLgNum;
        firstLgNum = secondLgNum;
        secondLgNum = max;
    }
    return [firstLgNum, secondLgNum];
}


function findAddress(obj) {
    if(typeof obj !== "object"){
        return "please provide me a valid object"
    }
    else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";

        return street + "," +house +","+society; 
    }
}



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

