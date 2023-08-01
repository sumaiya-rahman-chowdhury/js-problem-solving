function findMissingNumberGauss(nums) {
  const n = nums.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  const missingNumber = totalSum - actualSum;
  return missingNumber;
}
function findMissingNum(){
  const inputArrayString = document.getElementById("inputArray").value;
    const inputArray = inputArrayString
      .split(",") // Split the input string by commas to get individual numbers
      .map((num) => parseInt(num.trim(), 10)); // Convert each string number to an actual number

    const missingNumberFromArray = findMissingNumberGauss(inputArray);
    document.getElementById("output").innerHTML = missingNumberFromArray;
}