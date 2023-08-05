function lgNumber(a, b, c) {
    if (a > b && a > c) 
    { return a }

    else if (b > c && b > a)
     { return b }
    else 
    {return c}

}
let num = lgNumber(2,4,8);
console.log(num)