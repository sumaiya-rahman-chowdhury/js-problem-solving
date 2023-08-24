class Student{
    constructor(roll,gender){
        this.roll = roll ;
       this.gender = gender ;
    }
    introduction(){
        return (`Roll is ${this.roll} and Gender is ${this.gender}`)
    }
}

const student1 = new Student(28,"Female")
console.log(student1.introduction())