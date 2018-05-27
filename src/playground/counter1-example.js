const appRoot = document.getElementById('App');

let count = 0;

const addOne = () => {
    count ++;
    console.log('Add One');
    
    renderCounterApp();
};
const subOne = () => {
    count --;
    console.log('Sub One');
    renderCounterApp();
};
const reset = () => {
    count = 0;
    console.log('Reset');
    renderCounterApp();
}



// renderCounterApp is a function that recreates teh templete2 const and re-renders it whenever the function is called.
// since we added the function call inside the button actions.
// everytime we click the button, we are re-rendering it with the new count value.
const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} >+1</button> 
            <button onClick={subOne} >-1</button> 
            <button onClick={reset} >reset</button> 
        </div>
    );

    // takes two elements: JSX and location
    // the virtual DOM algorithm is very efficient. It only renders the change and not everything in the JSX
    ReactDOM.render(template2, appRoot); 
};


renderCounterApp();