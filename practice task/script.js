document.getElementById('btn').addEventListener('click',function(){


    // const initialTotal = document.getElementById('total');
    // const initialTotalValuString = initialTotal.innerText ;

    // const initialTotalValue = parseFloat(initialTotalValuString);
    // // console.log(initialTotalValue) ;
    // // 
    // const valueInputField = document.getElementById('value-field');
    // const getValueInputFieldString = valueInputField.value ;
    // const getValueInputField = parseFloat(getValueInputFieldString) ;
    // // 
    // const finalValue = initialTotalValue + getValueInputField ;
    // initialTotal.innerText = finalValue ;
     function getInputValueById(idInputField){
        const initialTotal = document.getElementById(idInputField);
        const initialTotalValuString = initialTotal.value ;
        const initialTotalValue1 = parseFloat(initialTotalValuString);
        initialTotal.value = '';
        return initialTotalValue1 ;
     }
     function getElementById(idElement){
      const initialTotal2 = document.getElementById(idElement);
      const initialTotalValuString2 = initialTotal2.innerText ;
      const initialTotalValue2 = parseFloat(initialTotalValuString2);
      return initialTotalValue2 ;
     }
     function add (a , b){
      return a+b ;
     }

   //   function setValue(element , valueSetId ){
   //     const idElement = document.getElementById(valueSetId);
   //     idElement.innerText = element ;
   //   }

     const initValue = getInputValueById('value-field') ;
    
   //   console.log(typeof(initValue))
     const valueFromh1 = getElementById('total') ;

     document.getElementById('total').innerText = add(initValue,valueFromh1) ;
    
   //   console.log(typeof(valueFromh1))
   


     


   
})