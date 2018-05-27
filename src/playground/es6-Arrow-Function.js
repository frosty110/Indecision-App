const square = function(x){
    return x * x;
};


console.log(square(8));

// always anonymous. We can only assign it to variable
const squareArrow = (x) => {
    return x * x;
};
console.log(squareArrow(8));

// a more consise way of expressing it. the expression is implicitly returned.
const squareArrow2 = (x) => x *x;
console.log(squareArrow2(8));

const getFistName = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(getFistName("Mike Small"));

const getFistName2 = (fullName) => fullName.split(' ')[0];
console.log(getFistName2("Mike Small"));
console.log(getFistName2("Abe Small"));


