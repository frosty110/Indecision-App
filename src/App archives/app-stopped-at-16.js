/*  this file will get compiled in app.js using the following code:
    babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
    it's important to node_modules is up to date using the "yawn install" which will regenerate the node_modules with the correct dependencies
*/

const currentdate = new Date(); 
const dateTime = "" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

console.log('App.js is running ' + dateTime);

const headerInfo = {
    title : "Indecision App",
    subtitle : "Some title",
    options: ['one', 'two']
};


function getOptions(length){
    if (length){
        return (
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
            </ol>
        );  
    }
}
// JSX - JavaScript XML
const template = (
    <div>
        <h1>{headerInfo.title}</h1>
        {headerInfo.subtitle && <p>{headerInfo.subtitle}</p>}
        <p>{headerInfo.options != null && headerInfo.options.length > 0 ? 'Here are your options' : 'No Options'} </p>
        {headerInfo.options && getOptions(headerInfo.options.length)}
    </div>
);

// takes two elements: JSX and location
ReactDOM.render(template, document.getElementById('App'));

const user = {
    userName : "Blaise A",
    userAge : 26,
    userLoc : 'Belmont'
};

function getLocation(location){
    // location != null && location.length > 0 ? 
    if (location)
        return <p>Location: {location}</p>;
}

const profileT =  (
   <div>
       <h3>{user.userName ? user.userName : 'Anonymous'}</h3>
       {user.userAge && user.userAge >= 18 && <p>Age: {user.userAge}</p> }
       {getLocation(user.userLoc)}
       <p>Last viewed: {dateTime}</p>
   </div>
);

ReactDOM.render(profileT, document.getElementById('My_Profile'));