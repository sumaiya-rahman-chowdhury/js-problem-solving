
// unsortedArray.sort((a,b)=> {return b-a});
// console.log(unsortedArray)
function sorting(array){
   
    for(let i=0;i<array.length;i++){

        for(let j=0;j<(array.length-i-1);j++){
            
            if(array[j]>array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp ;
            }
            
        }
       
    }
    console.log(array);
   

}
const unsortedArray = [4, 2, 9, 1, 5, 7];
sorting(unsortedArray)