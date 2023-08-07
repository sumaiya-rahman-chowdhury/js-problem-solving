/* // Problem 13: Pig Latin Translator

Write a function that takes a word as input and translates it into Pig Latin. In Pig Latin, you move the first letter of the word to the end and add "ay". For example, "hello" becomes "ellohay". */

function pigLatinTranslator(word){
    let newWord = word.substring(1)+ word.slice(0,1) +"ey";
   
    return newWord ;
}
const result = pigLatinTranslator("hello")
console.log(result)