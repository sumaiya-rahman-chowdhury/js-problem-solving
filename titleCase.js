function titleCase(sentence,list){
    const sentenceAfterSplit = sentence.split(" ");
    let result = "";
    for(let i=0; i<sentenceAfterSplit.length; i++){
        for(let j=0; j<list.length; j++){
            if(sentenceAfterSplit[i]===list[j]){
                sentenceAfterSplit[i] = sentenceAfterSplit[i].toUpperCase();
            }
        }
        result +=sentenceAfterSplit[i] + " ";
    }
    return result ;
}
const inputSentence = "the quick brown fox jumps over the lazy dog";
const inputList = ['quick', 'fox', 'lazy'];
const result = titleCase(inputSentence,inputList);
console.log(result)