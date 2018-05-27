let visibility = false;
const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Detail' : 'Show Detail'}
            </button>
        {visibility && (    
            <div>
                <p> some details </p>
            </div>
        )}
        </div>
    );
    
    ReactDOM.render(jsx, document.getElementById('App'));
};

render();