function avgOfArray(array){
    let sum = 0 ;
    for (let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum ;
}
const array =  [8, 12, 5, 3, 9, 20];
const result = avgOfArray(array);
console.log(result)