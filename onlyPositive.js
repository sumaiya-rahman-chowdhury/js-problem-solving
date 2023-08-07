function onlyPositive(array){
    if(!Array.isArray(array)){
        return "Provide me an Array "
    }
    let value = []
    for(let i=0; i<array.length; i++){
       
        if(array[i]>=0){
            value.push(array[i])
        }
        else{
            break ;
        }
    }
    return value;
}


const mixedArray = [5, 0, 12,8,9,99,99999,999999, -8, 15, -10, 20, -3]; 
const result = onlyPositive(mixedArray);
console.log(result.join(" "));