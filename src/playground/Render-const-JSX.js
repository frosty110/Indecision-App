const User = (props) => {
    return (
        <div>
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
        </div>
    );
};
ReactDOM.render(<User name={"andy"} age={29}/>, document.getElementById('App'));