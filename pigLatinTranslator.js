function pigLatinTranslator(word){
    let newWord = word.substring(1)+slice(0,word.length-1);
   
    return newWord ;
}
const result = pigLatinTranslator("hello")
console.log(result)