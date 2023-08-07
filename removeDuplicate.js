function removeDuplicateElement(array){
    let newArray = [ ];
    for(let i=0; i<array.length; i++){
        const element = array[i];
        if(!newArray.includes(element)){
            newArray.push(element);
        }
    }
    return newArray ;
}
const input = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicateElement(input);
console.log(result)