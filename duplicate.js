const names = ['a','b','c','d','g','gb','a','b','c','d','g','gb','ab'];

function removeDuplicate(namesArray){
    const unique = [];
    for(let i=0 ; i<namesArray.length; i++){
        const name = namesArray[i];
       if(unique.includes(name)=== false){
        unique.push(name);
       }
    }
     return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames.join(" "));

