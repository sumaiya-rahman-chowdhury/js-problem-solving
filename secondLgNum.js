function findSecondLargest (array){
    // validation
    if(!Array.isArray(array)){
        return "Provide an Array" 
    }
    else{
        let firstLgNum = array[0];
        let secondLgNum = array[1];
        for(let i=0 ; i<array.length; i++){
            let element = array[i];
            if(element>firstLgNum){
                secondLgNum = firstLgNum;
                firstLgNum = element; 
            }
            else if(element>secondLgNum){
                secondLgNum = element
            }
        }
        return secondLgNum;
    }
   
}



var scndLg = findSecondLargest([10, 5, 18, 20, 9]);
console.log(scndLg);