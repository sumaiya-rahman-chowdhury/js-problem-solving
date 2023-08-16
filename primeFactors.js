function primeFactors(n){
    const factors = [];
    let divisor =2 ;
    for(divisor=2; n>divisor; divisor++){
        while(n%divisor === 0){
            factors.push(divisor);
            n= n/divisor ;
        }
    }

    if(n === 2){
        factors.push(2);
    }

    return factors ;

}

const input = 72;
const result = primeFactors(input);
console.log(result);