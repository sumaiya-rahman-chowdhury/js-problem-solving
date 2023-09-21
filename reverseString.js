const strings = ["apple", "banana", "cherry", "date"];
console.log( strings)
let reversedArray = [];

for(let i=strings.length-1;i>=0;i--){
    let instance = ''
    for(let j=strings[i].length-1;j>=0;j--){
        instance += strings[i][j]
    }
    reversedArray.push(instance)
}

console.log(reversedArray)

