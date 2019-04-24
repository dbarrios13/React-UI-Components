import React from 'react';
import './Display.css';
import Result from './Result.js';
import NumberButton from '../ButtonComponents/NumberButton.js';
import ActionButton from '../ButtonComponents/ActionButton.js';

const CalculatorDisplay = () => {
    return (
        <div className='calculator'>
            <Result />
            <ActionButton text='clear' />
            <NumberButton buttonStyle='mathBtn' text='&divide;' />
            <NumberButton buttonStyle='numberBtn' text='7' />
            <NumberButton buttonStyle='numberBtn' text='8' />
            <NumberButton buttonStyle='numberBtn' text='9' />
            <NumberButton buttonStyle='mathBtn' text='&times;' />
            <NumberButton buttonStyle='numberBtn' text='4' />
            <NumberButton buttonStyle='numberBtn' text='5' />
            <NumberButton buttonStyle='numberBtn' text='6' />
            <NumberButton buttonStyle='mathBtn' text='&minus;' />
            <NumberButton buttonStyle='numberBtn' text='3' />
            <NumberButton buttonStyle='numberBtn' text='2' />
            <NumberButton buttonStyle='numberBtn' text='1' />
            <NumberButton buttonStyle='mathBtn' text='&#43;' />
            <ActionButton text='0' />
            <NumberButton buttonStyle='mathBtn' text='&#61;' />
        </div>
    );
};

export default CalculatorDisplay;