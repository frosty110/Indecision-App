class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visibility : false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            };
        });
        
    }
    render(){
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {console.log(this.state.visibility)}
                {this.state.visibility && (
                    <div>Details</div>
                )}
            </div>
        );
    }
}
ReactDOM.render(<Visibility/>,document.getElementById('App'));