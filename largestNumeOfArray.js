function largestNumeOfArray(arr){
    if(!Array.isArray(arr)){
        return "plz provide me an array"
    }
    let max = arr[0];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
let arrA = ["a","aa","aaaa","aaaaaa"];
let result = largestNumeOfArray(arrA);
console.log("Largest Array is :" + result);