import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };

    handleAddOption = (option) => {

        if (!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'Option already exists';
        }

        this.setState( (prevState) => ({ 
            options : prevState.options.concat(option) 
        }));
    };

    handlePick = () => {
        const randomPick = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomPick];
        this.setState( ()=> ({selectedOption: option}));
        // alert(this.state.options[randomPick]);

    };

    handleDeleteOptions = () => {
        // implicitly return an option - not using the "return' statement"
        this.setState( () => ({ options: []})); ///{ return { options : []}; });
    };

    handleDelteOptionSingle = (removeOption) =>{
        console.log('hdo', removeOption);
        
        this.setState( (prevState)=> ({
            options : prevState.options.filter(option => option !== removeOption) // filtering out items where option != removed option
        }));
    };

    handleClearSelectedState = () => {
        this.setState( () => ({
            selectedOption: undefined
        }));
    };

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

    render(){
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle = {subTitle}/>
                
                <div className = "container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick ={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDelteOptionSingle}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedState = {this.handleClearSelectedState}
                />
            </div>
        );
    }
}

export default IndecisionApp;