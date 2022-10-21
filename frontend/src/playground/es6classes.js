class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        return `Hi. i am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is${this.age}year(s)old`;
    }
}

class student extends person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasmajor(){
        let description = super.getDescription();
        return`${description}and i studies${this.major}`;
    }
}

const student1 = new student("jeffrey",21,"business");
console.log(student1.hasmajor());