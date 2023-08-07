function countCharacter(string ,char){
    const newString = string.split("");
    let count = 0;


    for(let i=0; i<newString.length; i++){
        if(newString[i] === char){
            count++ ;
        }
    }
    return  char +" " + "in " +  newString + " is " + count;
}
const result = countCharacter("aaabbs hellow world", "x")
console.log(result)