function sumOfSquares(n){

    let sum = 0;
    for(let i=0; i<=n; i++){
        sum += (i*i);
    }

    return sum ;

}

const input = sumOfSquares(10);
console.log(input)