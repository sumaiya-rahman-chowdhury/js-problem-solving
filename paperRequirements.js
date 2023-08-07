/* count paper ---
book1---->100
book2------->200
book3---------->300 */

function paperRequirements(book1,book2,book3){
    const total = (book1*100) + (book2*200) + (book3*300);
    return total; 
}
const totalPaper = paperRequirements(2,3,4);
console.log(totalPaper);