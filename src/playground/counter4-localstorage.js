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

    componentDidUpdate(prevProp, prevState){
        if (prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }
    componentDidMount(){
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
            
            if(count && !isNaN(count)){
                this.setState( ()=> ({ count }));
            }
        } catch (e) {
            // throw error
            console.log(e);
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

ReactDOM.render(<Counter count={12}/>, document.getElementById('App'));
