const sentenceUp = "I love my country " ;
const sentence = sentenceUp.toLowerCase();
let count = 0;
for(let i=0;i<sentence.length;i++){
    if(sentence[i] === "i" ||sentence[i] === "a"|| sentence[i] === "o"|| sentence[i] === "u"||sentence[i] === "e" ){
        console.log(sentence[i])
        count ++ 
    }
}
console.log("Total Vowel" + " " + count)