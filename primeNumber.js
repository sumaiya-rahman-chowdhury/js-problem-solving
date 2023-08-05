var n = 10;
var isPrime = true;
if(n<1){
    isPrime =false;
}
else{
    for(var i=2; i<=Math.sqrt(n); i++ ){
        if(n%i === 0){
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime)