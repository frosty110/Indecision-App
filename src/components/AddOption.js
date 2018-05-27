import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };

    // handleAddOption(e){
    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.Option.value.trim();
        const error = this.props.handleAddOption(option);

        e.target.elements.Option.value = '';

        this.setState(() => ({error} ));

        if (!error){
            e.target.elements.Option.value = ''; // when we submit the value, we wipe the value
        }

    };

    render(){
        return(
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="Option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}