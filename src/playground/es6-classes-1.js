class Person {
    // use ES6 class definition
    // set default values in the constructor
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        // return 'hi! I\'m, ' + this.name + '.';
        
        // ES6 template string - iterpolate / inject values inside the string
        return `Hi, I am ${this.name}!`;
    }

    getDescribtion(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// inheritence in ES6
class Student extends Person {
    constructor(name, age, major, homeLocation){
        // super refers to the parent constructor function
        super(name, age);
        this.major = major;
        this.homeLocation = homeLocation;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescribtion(){
        let description = super.getDescribtion();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        if (!!this.homeLocation){
            description += ` Their home location is ${this.homeLocation}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greet = super.getGreeting();
        if (!!this.homeLocation){
            greet += ` I'm from ${this.homeLocation}.`;
        }
        return greet;
    }
}

const hobo = new Traveler("Andrew", 29, 'Phili');
console.log(hobo);
console.log(hobo.getGreeting());
console.log(hobo.getDescribtion());

const me = new Student("Andrew", 29, 'Computer Science','Phili');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescribtion());

const otherStudent = new Student(undefined, 19, 'Sociology');
console.log(otherStudent);
console.log(otherStudent.getGreeting());
console.log(otherStudent.getDescribtion());

const otherPerson = new Student();
console.log(otherPerson);
console.log(otherPerson.getGreeting());
console.log(otherPerson.getDescribtion());