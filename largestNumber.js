function largestNumber(array){

    let lgNumber = array[0];
    const newArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i]>lgNumber){
            lgNumber = array[i];
        }
    }
    return lgNumber ;

}

const myArray = [1,2,3,4,5,6,78,5,99,1,2,3,4];
const result = largestNumber(myArray);
console.log(result)