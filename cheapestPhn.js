const phones = [
    {name:"Samsung",camera:12,storage:'32Gb',price:36000,color:'silver'},
    {name:"Walton",camera:12,storage:'32Gb',price:22000,color:'silver'},
    {name:"Iphone",camera:12,storage:'32Gb',price:82000,color:'silver'},
    {name:"Xiomi",camera:12,storage:'32Gb',price:52000,color:'silver'},
    {name:"Oppo",camera:12,storage:'32Gb',price:20000,color:'silver'},
    {name:"Nokia",camera:12,storage:'32Gb',price:44000,color:'silver'},
    {name:"HTC",camera:12,storage:'32Gb',price:62000,color:'silver'}
];

function cheaptestPhone(p){
    let cheapestOne = p[0];
    for(let i=0; i<p.length; i++){
        const phone = p[i];
       if(phone.price < cheapestOne.price){
        cheapestOne = p[i];
       }
    }
    return cheapestOne;
}

const mySelection = cheaptestPhone(phones)
for(var key in mySelection){
    console.log(key + ": " + mySelection[key]);
}


