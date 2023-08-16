function integer(x){
    if(typeof x !== 'number'){
        return "provide number"
    }
    else if(x%1 == 0){
        return true ;
    }
    else {
        return false ;
    }
}

console.log(integer(5))