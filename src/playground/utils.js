console.log('utils.js is running');

const square = (x) =>  x * x;
// default export
export const add = (a,b) => a + b;

// named exports - not an object definition but a reference
export { square, subtract as default };
// exports - default export - named exports


const subtract = (a,b) => a-b;

// export default subtract // alternative way
// export default (a,b) => a-b; // alternative way