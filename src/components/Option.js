import React from 'react';

const Option = (props) => (
    <div className="option" key={props.optionText}>
        <p className="option__text">
            {props.count}.  {' '}
            {props.optionText}
        </p>
        <button className="button--link" onClick={ (e) => {
            props.handleDeleteOption(props.optionText);
        }}> Remove </button>
    </div>
);

export default Option;