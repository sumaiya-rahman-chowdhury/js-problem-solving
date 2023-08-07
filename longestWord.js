function longestWord(sentence){
    const afterSplit = sentence.split(" ");
    let lg = afterSplit[0];
    for(let i =0; i<afterSplit.length; i++){
        if(afterSplit[i].length>lg.length){
            lg = afterSplit[i];
            
        }
    }
    return lg;
}
const sentence = "This code keeps track of the longest length encountered so far and maintains an array of words with that length";
const result = longestWord(sentence);
console.log(result +" " + result.length)