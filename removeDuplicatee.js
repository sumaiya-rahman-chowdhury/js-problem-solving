const my_array = [7, 2, 5, 9, 2, 7, 8, 1, 5]
let newArray = []
for(let i=0;i<my_array.length;i++){
      
       if(!(newArray.includes(my_array[i]))){
        newArray.push(my_array[i])
       }
      
}
console.log(newArray)


