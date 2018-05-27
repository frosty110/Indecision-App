
console.log("App.js is running!");

const app = {
    title : "Ishika's App",
    subtitle : "Fortune Teller",
    options: ["value1", "value2"]
};

// e is the event object - similar to regular javacsript or other UI libraries
const onFormSubmit = (e) => {
    e.preventDefault(); // stops full page refresh
    
    // e.target points to the element that the event started on.
    // target is the form (where the submit event type occured)
    // elements contains list of all the elements indexed by name.
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderTemplate();
};

const onFormRemoveAll = () => {
    app.options = [];
    renderTemplate();
};

const onMakeDecision = () => {
    const randomNum = Math.floor( Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

let visibility = false;
const optionsVisibility = () => {
    
    visibility = !visibility;
    console.log(visibility)
    renderTemplate();
};


// JSX - JavaScript XML
const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'} </p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onFormRemoveAll}>Remove All</button>
            <p><button onClick={optionsVisibility}>{visibility ? "show" : "hide"}</button></p>
            <ol hidden={visibility}>
                {/* Keys are important. They help react identify which items ahve changed, added, or removed. 
                    keys are given to elements in the array. keys are typically  data IDs from database */}
                { app.options.map( (item, index) => <li key={index}> {item} </li>)} 
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('App');
renderTemplate();



