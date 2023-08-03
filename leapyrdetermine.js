// function findLeapYear(yr){
//     if(yr%4 === 0 && (yr%100 !== 0 || yr%400 === 0)){
//         return " is leap year"
//     }
//     else{
//         return " Not Leap year"
//     }
// }
// const year = 2036;
// const result = findLeapYear(year);
// console.log(year + result); 


// using array leap year determine

function findLeapYear(array) {
    let leapyr = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 4 === 0 && (array[i] % 100 !== 0 || array[i] % 400 === 0)) {
            leapyr.push(array[i]);

        }
    }
    return leapyr;
}

const year = [2020, 2000, 1996, 1968, 1600, 2400, 4000, 4004, 8000, 9996];

const result = findLeapYear(year);
for(let j=0;j<result.length;j++){
    console.log(result[j]);
}