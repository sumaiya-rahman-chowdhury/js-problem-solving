const body = document.getElementById('body');
const x = body.childNodes ;
console.log(x)
function liCreate(text){
    const li = document.createElement('li') ;
   li.innerText = text ;
   for(let i=0;i<x.length;i++){
    if(x[i].innerText === text){
        console.log(x[i])
        return ;
        
       }
   }
   
        body.appendChild(li);
        console.log(x.length-1)
   
  
}

function addToList(){
    const title = document.getElementById('h1-1').value;
    liCreate(title) ;
}


