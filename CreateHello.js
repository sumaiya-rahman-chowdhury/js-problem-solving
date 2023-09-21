const findMax =(numbers)=>{
    let maxNumber = 0
    for (num in numbers){
        // console.log(num)
    if (numbers[num] > maxNumber){
      maxNumber = numbers[num]
    }
  return maxNumber;
  }
    }
  const numbers=[77,12,33,10,6]
  console.log(findMax(numbers))


