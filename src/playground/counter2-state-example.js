class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        
        this.state = {
            count: 0
        }
    }
    handleAddOne(e){
        // this.serState is a function that allows up the change the state of the values we wnat to change
        // this setState is an asyncronous call
        // if using prevState in the logic, use it over referencing and updating the this.state object.
        // this.setState({
        //     return {count: this.state.count + 1};
        // });
        this.setState((prevState)=> {
            return { count: prevState.count + 1};
        });
    }
    handleMinusOne(e){
        this.setState((prevState)=> {
            return { count: prevState.count - 1};
        });
    }
    handleReset(e){
        this.setState(()=> {
            return { count: 0};
        });
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('App'));