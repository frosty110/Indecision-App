const obj = {
    name : 'vikram',
    getName(){
        console.log(this);
        return this.name;
    }
};

const getNameFunction = obj.getName.bind({});
console.log(getNameFunction);
console.log(getNameFunction());




// CALL BIND IN THE CONSTRUCTOR NO INLINE

/*      IN-LINE BIND CALL
    I want to note that in the button class. WHen binding This to the function, we're actually make it more expensive.
    Everytime the component rerenders, we are rerunning bind which is inefficient.
*/
class Options extends React.Component{
    handleRemoveAll(){
        alert('remove all');
        console.log(this.props.options);
    }
    render(){
        return(
            <div>
                <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
                <ol>
                {this.props.options.map( (item, key) => <Option item={item} key={key}/>)}
               </ol>
            </div>
        );
    }
}

/*      CONSTRUCTOR BIND CALL
*/
class BetterOptions extends React.Component{
    // override constructor
    constructor(props){
        super(props); // we have to do this to not break anything when overrding the React constructor.
        
        /*  By binding here, whereever we call handleRemoveAll, 
                we will have the 'this' context which has everything here including props.
            This is because the constructor isn't being called during the event handle. 
            So once we bind the this to it, we don't have to do it again
        */
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll(){
        console.log(this.props.options);
    }
    render(){
        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <ol>
                {this.props.options.map( (item, key) => <Option item={item} key={key}/>)}
               </ol>
            </div>
        );
    }
}