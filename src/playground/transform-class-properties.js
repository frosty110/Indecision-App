class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hi. My name is ${this.name}.`;
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax); // OldSyntax {name: "Mike"}
const getGreeting = oldSyntax.getGreeting();
console.log(getGreeting);


class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi. My name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
console.log(newSyntax); // NewSyntax {name: "Jen"}
const new_getGreeting = newSyntax.getGreeting();
console.log(new_getGreeting);