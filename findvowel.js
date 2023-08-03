function findVowel (s){
    if(typeof s !== "string"){
        return "Please Provide me a string";
    }
    let vowel = 0;
    let consonent = 0 ;
    let space = 0;
    let vowelArray = [];
    for(let i=0; i<s.length;i++){
        let char = s[i].toLowerCase();
        if(char === "a" ||char === "e" ||char === "i" ||char === "u" ||char === "o" )
        {
            vowel++;
        }
        else if(char !== " "){
            consonent++;
        }
        else{
            space++;
        }
    }
    const obj = {
        vowelCount: vowel,
        ConsonentCount : consonent,
        spaceCount : space,
        vowelArray : vowelArray
    }
    return obj;
}
const sentence = "the name of the country";
console.log(findVowel(sentence));