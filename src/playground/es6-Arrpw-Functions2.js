/* SPECIAL NOTES 
    arguments object - no longer bound with arrow functions.
    this keyword - no longer bound
*/

const add = function(a, b){
    console.log(arguments); // in arrow functions, this wont work
    return a + b;
};
console.log(add(1,2,3));


/*  In ES5 ‘this’ referred to the parent of the function
    In ES6, arrow functions use lexical scoping —  ‘this’ refers to it’s current surrounding scope and no further
*/

const user = {
    name : "andrew",
    cities : ['phili', 'dublin'],
    randomFunction: function() {
        // with es6, we don't have to use the word "function" anymore
    },
    printPlaceLived(){ // we don't use the arrow function (es6) here because we'd be looking at the parent scope which is the global scope

        console.log(this.name);
        console.log(this.cities);
        const describe = 'lived';
        
        // This will give you an error because the context for this is changes.
        // this.cities.forEach( function(city) {
        //     console.log(this.name + ' has lived in ' + city); // this belongs to the owner of the function.
        // });

        this.cities.forEach( city => { 
            console.log(this.name + ' has ' + describe + ' in ' + city ); // in ES6, the 'this' refers to the parent's scope.
        });
    },
    printPlaceLivedMap(){
        // map takes an array, provide a function that transforms each item and we get a new array with the transformed value
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has visted ' + city + '!';
        });
        return cityMessages
    },
    printPlaceLivedMapSimple(){
        // map takes an array, provide a function that transforms each item and we get a new array with the transformed value
        return this.cities.map((city) => this.name + ' has visted ' + city + '!');
    }
};

user.printPlaceLived();
console.log(user.printPlaceLivedMap());

// # CHALLENGE
const multiplier = {
    numbers : [1,2,3],
    multiplyBY : 2,
    // numbers - array of numbers
    // multiplyBY - single numbers
    // multiply - return a new array where the number have been multiplied
    multiply()  {
        return this.numbers.map((num) => num * this.multiplyBY); // implicit
    }
};

console.log(multiplier.multiply());