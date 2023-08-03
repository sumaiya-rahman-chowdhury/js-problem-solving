function findLeapYear(yr){
    if(yr%4 === 0 && (yr%100 !== 0 || yr%400 === 0)){
        return " is leap year"
    }
    else{
        return " Not Leap year"
    }
}
const year = 2036;
const result = findLeapYear(year);
console.log(year + result); 