import React from 'react';

// stateless functional component
const Action = (props) => (
    <div>
        <button className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do{console.log(props)}
        </button>
    </div>
);

export default Action;