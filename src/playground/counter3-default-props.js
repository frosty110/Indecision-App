class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        
        this.state = {
            count: (!!props.count ? props.count : 0)
        }
    }
    handleAddOne(e){
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

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter count={12}/>, document.getElementById('App'));