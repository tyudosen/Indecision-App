class Person{
    constructor(name = 'Mr Robot', age = 0){
        this.name = name;
        this.age = age;
    };
    getGreeting(){
        return `Hi, I am ${this.name}.`
    }
    getDescrip(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescrip(){
        console.log('testing');
        let descrip = super.getDescrip()

        if(this.hasMajor()){}{descrip += `Their major is ${this.major}`}
        return descrip;
        
    }
}

class Traveler extends Person{
    constructor(name,age,location){
        super(name,age)
        this.location = location;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(location){greeting += `I am visiting from ${this.location}`};
        return greeting;
    }
    
}
// const stud = new Student('mead',12,'computer science')


const trav = new Traveler('mead',20,'london');

console.log(trav.getGreeting());

// const me = new Person('Dave',25)
// console.log(me.getGreeting());
// console.log(me.getDescrip());


