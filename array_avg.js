function avgArray (arr,legth){
    let sum = 0;
    if(length == 0){
        return 0;
    }
    for(let i=0;i<length;i++){
         sum = sum + arr[i];
    }
    let avg = sum/legth;
        return avg ;
}
let arrayA = [10, 20, 30, 40, 50];
let length = arrayA.length;
let avgOfArray = avgArray (arrayA,length);
console.log(avgOfArray);