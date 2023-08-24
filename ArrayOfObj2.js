let sum = 0 ;
const arrayOfObjects = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];
//   for(let i of arrayOfObjects){
//     sum = i.age + sum ;
//   }
for(let i=0;i<arrayOfObjects.length;i++){
//   console.log(arrayOfObjects[i].age) 
  sum +=  arrayOfObjects[i].age ;
}
  console.log(sum)