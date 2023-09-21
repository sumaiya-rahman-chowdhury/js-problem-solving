
const containerDiv = document.getElementById("container")
function handleClick(){
    const inputField = document.getElementById("input-field");
   
    const inputFieldValue = inputField.value ;
    inputField.value = " "
    console.log(inputFieldValue)
    const div = document.createElement("div");
    div.innerHTML = `
    <div>
    <div class="divList">
        <h3>${inputFieldValue}</h3>
    <button class="delete-btn">Delete</button>
    </div>
</div>
    
    `
    containerDiv.appendChild(div)
}

// function deleteBtn(){
//    const item = containerDiv.children[3];
//    item.remove();
// }
containerDiv.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const divList = event.target.parentElement;
        divList.parentElement.remove();
        console.log(divList)
    }
});