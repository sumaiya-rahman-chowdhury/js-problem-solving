document.getElementById('btn').addEventListener('click',function(){
    const initialTotal = document.getElementById('total');
    const initialTotalValuString = initialTotal.innerText ;
    const initialTotalValue = parseFloat(initialTotalValuString);
    // console.log(initialTotalValue) ;
    // 
    const valueInputField = document.getElementById('value-field');
    const getValueInputFieldString = valueInputField.value ;
    const getValueInputField = parseFloat(getValueInputFieldString) ;
    // 
    const finalValue = initialTotalValue + getValueInputField ;
    initialTotal.innerText = finalValue ;




    valueInputField.value = '';
})