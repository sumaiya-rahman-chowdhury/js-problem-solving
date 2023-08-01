function factorial(num){
 if (num == 0 || num == 1){
    return 1;
 }
 else{
    return num*factorial(num-1);
 }
}

function checkFactorial(){
   var inputNumber = document.getElementById("inputNumFacto").value ;
   var resultNumber = document.getElementById("resultFacto");
   if (isNaN(inputNumber) || inputNumber<0){
    resultNumber.innerHTML = "Please enter a non-negative integer.";
   }
   else{
    const result = factorial(inputNumber);
    resultNumber.innerHTML = `Factorial of ${inputNumber} is: ${result}.`;
   }
}