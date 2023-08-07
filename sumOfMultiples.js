function sumOfMultiples(n1,n2){
    let sum = 0;
    for(let i=1;i*n1<n2; i++){
        sum += i*n1 ;
    }
    return sum ;
}
let result = sumOfMultiples(5,30);
console.log(result)