function matchFinder(string1, string2) {
    if(typeof string1 !== "string" ){
        return "provide an string"
    }
    else if(typeof string2 !== "string"){
        return "provide an string"
    }
    if(string1.includes(string2))
    {
        return true ;
    }
    else{
        return false ;
    }

}






console.log(matchFinder("john doe","ohn"))
