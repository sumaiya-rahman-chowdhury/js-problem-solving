// Robin Food
orderPizza('Nonveg','chicken pizza',function(msg){
    console.log(msg)
});
function orderPizza(type,name,callback){
    console.log(`Pizza ${type} ${name} is order`);
    setTimeout(function(){
        const msg = `Pizza ${type} ${name} is Ready` ;
        callback(msg) ;
    },3000)
}