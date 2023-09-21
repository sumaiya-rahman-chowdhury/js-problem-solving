const arrayOfObjects = [
    {
      id: 1,
      name: "John",
      age: 30,
    },
    {
      id: 2,
      name: "Alice",
      age: 25,
    },
    {
      id: 3,
      name: "Bob",
      age: 35,
    },
  ];
const objWithIdIndex = arrayOfObjects.findIndex(obj=> obj.id === 2)
 
  const result = arrayOfObjects.filter(idx => idx.id !== 2)
  console.log(result)