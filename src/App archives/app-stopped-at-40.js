class IndecisionApp extends React.Component{
    // override constructor
    constructor(props){
        super(props); // we have to do this to not break anything when overrding the React constructor.
        this.state = {
            options:[]  
        };

           
        /*  By binding here, whereever we call handleRemoveAll, 
                we will have the 'this' context which has everything here including props.
            This is because the constructor isn't being called during the event handle. 
            So once we bind the this to it, we don't have to do it again
        */
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(option){

        if (!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'Option already exists';
        }


        this.setState( (prevState) => {
            return {
                // concat returns a new array which is what we want to do. 
                // We don't want to modify the prevState or this.state.
                options : prevState.options.concat(option)
            };
        });
    }

    handlePick(){
        const randomPick = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomPick]);

    }
    handleDeleteOptions(){
        this.setState( () => {
            return {
                options : []
            };
        });
    }

    render(){
        const title = 'Indecision App';
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subTitle = {subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick ={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}



// extend React Compont 
// React requires that the the class name start with an upper case letter
class Header extends React.Component{
    // react components REQUIRE a render to be defined.
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return  (
            <div>
                
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do{console.log(this.props)}
                </button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <ol>
                {this.props.options.map( (item, key) => <Option item={item} key={key}/>)}
               </ol>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <li key={this.props.key}>{this.props.item}</li>
        );
    }
}
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault(); // block default form refresh 

        const option = e.target.elements.Option.value.trim();
        const error = this.props.handleAddOption(option);

        e.target.elements.Option.value = '';

        this.setState(() =>{
            return {error};
        });

    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="Option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('App'));



