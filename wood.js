function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood ;
    const bedWood =  bedQuantity * perBedWood ;

    const totalWood = chairWood+tableWood+bedWood;
    // return [chairWood,tableWood,bedWood];
    return totalWood;
}
let result = woodCalculator(3,5,6);
console.log(result)