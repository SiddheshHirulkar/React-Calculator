import React from 'react'
import './screen.css';

const Screen = ({ scrVal, setScrVal }) => {
    
    const changeScrValue = (e) => {
        setScrVal(e.target.value)
    }

    return (
        <div className="p-2">
            <input 
                className="p-2 cal-screen" 
                type="text"
                placeholder="0" 
                value={scrVal}
                onChange={changeScrValue}
            />
        </div>
    )
}

export default Screen;
