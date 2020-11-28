import React from 'react';
import './keypad.css';

const Keypad = ({ scrVal, setScrVal }) => {
    
    // function for clearing screen
    const clearScr = () => {
        setScrVal('');
    }
    
    // onclick for digits and arithmatic symbols
    const printVal = (e) => {
        setScrVal(scrVal + e.target.name);
    }

    // for getting output after pressing '=' key
    const getOutput = () => {
        setScrVal(eval(scrVal).toString());
    }

    // for changing sign
    const changeSign = () => {
        setScrVal((scrVal) => {
            if(scrVal >! 0) {
                return scrVal = "-" + scrVal;
            } else {
                return scrVal.replace("-", "+");
            }
        });
    }

    return (
        <div className="cal-keys">
            <button onClick={clearScr}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={printVal} name="%">%</button>
            <button onClick={printVal} name="/" className="division-key">/</button>
            <button onClick={printVal} name="7">7</button>
            <button onClick={printVal} name="8">8</button>
            <button onClick={printVal} name="9">9</button>
            <button onClick={printVal} name="*" className="multiplication-key">x</button>
            <button onClick={printVal} name="4">4</button>
            <button onClick={printVal} name="5">5</button>
            <button onClick={printVal} name="6">6</button>
            <button onClick={printVal} name="-" className="substraction-key">-</button>
            <button onClick={printVal} name="1">1</button>
            <button onClick={printVal} name="2">2</button>
            <button onClick={printVal} name="3">3</button>
            <button onClick={printVal} name="+" className="addition-key">+</button>
            <button onClick={printVal} name="0" className="zero-key expand-box">0</button>
            <button onClick={printVal} name=".">.</button>
            <button onClick={getOutput} className="equals-key">=</button>
        </div>
    )
}

export default Keypad;
