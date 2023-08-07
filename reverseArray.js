function reverseArray(array) {
    const reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray
}
const a = ["a", "b", "c"];
const result = reverseArray(a);
console.log(result)

/* 

    // Solution 2

    function reverseArray(array){
   

        const newArray = array.reverse();
        return newArray ;
    } */