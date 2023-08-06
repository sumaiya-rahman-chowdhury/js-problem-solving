// if tcks num < 100 per tck price is = 100 tk 
 /* if tcks is more than 100 ,but less than 200 . first 100 tcks will be 100/tcks 
 rest will be 90 tk */
 /* if you purchase morre than 200 tcks 
 first 100 ---> 100tk 
 101 - 200 -----> 90 tk
 200+ ----> 70tk
  */


function ticketPrice(number){
   const first100Rate = 100;
   const second100Rate = 90;
   const restTicketRate = 70;

   if(number <= 100){
    const price = number * first100Rate ;
    return price
   }
   else if(number<=200){
     const first100Price = 100 * first100Rate;
     const restTicketQuantity = number - 100 ;
     const restTicketPrice = restTicketQuantity * second100Rate;
     const totalPrice = first100Price + restTicketPrice ;
     return totalPrice ;
   }
   else{
    const first100Price = 100 * first100Rate;
    const second100Price = 100*second100Rate;
    const ticketQuantity = number - 200 ;
    const restTicketPrice = ticketQuantity * restTicketRate;
    const totalCost = first100Price + second100Price + restTicketPrice;
    return totalCost ;
   }

}

const price = ticketPrice(1120);
console.log(price)