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

console.log(sortMaker([-1,6]))