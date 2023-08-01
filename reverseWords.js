function reverseWords(){
    const givenSentence = document.getElementById("inputReverse").value ;
    document.getElementById("reverse_words").innerHTML=reverse_Words(givenSentence);
}
function reverse_Words(sentence){
    const array = sentence.split(" ");
    const reverseArray = array.reverse();
    const reverseSentence = reverseArray.join(" ");
    return reverseSentence;
}