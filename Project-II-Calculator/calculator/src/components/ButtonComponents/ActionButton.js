import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <button className='actionBtn' >{props.text}</button>
    );
}

export default ActionButton;