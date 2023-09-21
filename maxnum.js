my_array = [15, 27, 8, 42, 11, 19, 4]
function max(arr){
    let temp = ''
    for(let i=0;i<arr.length;i++){
         temp = arr[i] ;
        if(arr[i+1]<arr[i]){
            arr[i] = arr[i+1];
            arr[i+1] = temp ;
            temp = arr[i]  
        }
        
    }
    console.log(temp)
}

max(my_array)