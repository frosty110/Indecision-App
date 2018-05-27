var nameVar = 'name';
var nameVar = 'jake'; // PROBLEM: with var we can reassign as well as REDEFINE namevar not knowing that we were already using it.
console.log('nameVar', nameVar);

let nameLet = 'jen';
nameLet = 'jen';  // we can reassign
// let nameLet = 'step'; // in ES6 an error will be thrown "Duplicate declaration"
console.log(nameLet);


const nameConst = 'frank';
// const nameConst = 'ted'; // 'Duplicate declaration value' error
// nameConst = 'ted'; //"nameConst" is read-only' error is printed
console.log(nameConst);




/******************************************************** FUNCTION SCOPING ********************************************* */

function getPetName(){
    var petName = 'Ha1';
    return petName;
}

// console.log(petName); // console error - petName is not define because the variable is outside it's defined scope

function getPetName(){
    var petName = 'Ha1';
    return petName;
}

// console.log(petName); // console error - petName is not define because the variable is outside it's defined scope


/******************************************************** BLOCK SCOPING ************************************************ */

var fullName = 'Bla Alb';
if (fullName){
    var firstVar = fullName[0];
}
console.log(firstVar); // THIS IS VISIBLE!!! even though it was declared in the above block

if (fullName){
    let firstLet = fullName.split(' ')[0];
}
// console.log(firstLet); // not defined error

if (fullName){
    const firstConst = fullName.split(' ')[0];
}
// console.log(firstConst); // not defined error