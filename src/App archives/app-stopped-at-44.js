class IndecisionApp extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            options: []
        };

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDelteOptionSingle = this.handleDelteOptionSingle.bind(this);
    }

    // mount single instnace. functional component. Faster
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const cachedOptions = JSON.parse(json);

            // save this implicity. If the property value is the same as the value, no need to set it
            // this.setState( () => ({ cachedOptions }));
            if (cachedOptions){
                this.setState( () => ({ options : cachedOptions }));
            }
        } catch (e){
            // do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Saving Data');
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleAddOption(option){

        if (!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'Option already exists';
        }

        this.setState( (prevState) => ({ 
            options : prevState.options.concat(option) 
        }));
    }

    handlePick(){
        const randomPick = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomPick]);

    }
    handleDeleteOptions(){
        // implicitly return an option - not using the "return' statement"
        this.setState( () => ({ options: []})); ///{ return { options : []}; });
    }
    handleDelteOptionSingle(removeOption){
        console.log('hdo', removeOption);
        
        this.setState( (prevState)=> ({
            options : prevState.options.filter(option => option !== removeOption)
        }));
    }
    

    render(){
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle = {subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick ={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDelteOptionSingle}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App'
}

// stateless functional component
const Action = (props) => {
    return  (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do{console.log(props)}
            </button>
        </div>
    );
};

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <ol>
                {
                    props.options.map( (option, key) => (
                        <Option 
                            key={key}    
                            optionText={option}
                            handleDeleteOption = {props.handleDeleteOption}
                        />
                    ))
                }
           </ol>
        </div>
    );
}

const Option = (props) => {
    return(
        <li key={props.key}>
            {props.optionText}
            <button onClick={ (e) => {
                props.handleDeleteOption(props.optionText);
            }}> remove </button>
        </li>
    );
};

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.Option.value.trim();
        const error = this.props.handleAddOption(option);

        e.target.elements.Option.value = '';

        this.setState(() => ({error} ));

        if (!error){
            e.target.elements.Option.value = ''; // when we submit the value, we wipe the value
        }

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

ReactDOM.render(<IndecisionApp />, document.getElementById('App'));

