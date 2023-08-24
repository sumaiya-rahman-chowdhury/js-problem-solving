const instructor = [
    {name :'Nodi',age:28,position:'Senior'},
    {name :'Akil',age:26,position:'Junior'},
    {name :'Sobuj',age:30,position:'Senior'}
]
const result = instructor.filter(x => x.position === 'Senior' )
console.log(result[0].name)
console.log(result[1].name)