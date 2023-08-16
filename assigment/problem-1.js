function cubeNumber(number) {
    if(typeof number !== "number"){
        return "provide a number"
    }
    let output = number*number*number ;
    return output ;

}

console.log(cubeNumber(4));
