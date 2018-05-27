import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        // allows user to close via ESC or clicking outside of the modal. Better UX
        onRequestClose={props.handleClearSelectedState} 
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal" // overrite modal's CSS styles with our own
    >
        <h3 className="modal__title">Select Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button  className="button" onClick={props.handleClearSelectedState} >Okay</button>
    </Modal>
);

export default OptionModal;