function bestFriend(array){
    if(!Array.isArray(array)){
        return "Give and Array" ;
    }
    let lgName = array[0];
    for(let i=0; i<array.length; i++){
       
        if(array[i].length>lgName.length){
            lgName = array[i];
        }
    }
    return lgName ;
}
const arr = ['sajid','mamun','kamal','jubayer bin rased','chinku'];
const result = bestFriend(arr);
console.log(result);