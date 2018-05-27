// named exports

export const isAdult = (x) => {
    return x >= 18;
};

const canDrink = (x) => {
    return x >= 21;
};

export {canDrink};

// default exports. can only have one. can be imported as any name.
export default (x) => 64<x;

/* Code from other file - how to reference and call it.

import isSenior, {canDrink, isAdult} from './person.js'
console.log(canDrink(18));
console.log(isAdult(18));
console.log(isSenior(64));

*/