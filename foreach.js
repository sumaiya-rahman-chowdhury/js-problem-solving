const number = [1,2,3,4,5,6,8]
// const result = number.forEach(n=>console.log(n*7))
const seleted = number.filter(p=>p>5)
// console.log(seleted)

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Fiona", "Grace", "Hank"];

const oddName = names.filter(name => name === 'Bob')
console.log(oddName)
// const newName = [] ;
// for(let name of names ){
//     if(name.length%2 === 0){
//         newName.push(name)
//     }
// }
// console.log(newName)