import React from 'react';
import './scroll.css';

const Scroll = (props) =>{
    return (
        <div className="scroll" style={{overflowY: 'scroll', height: '500px', scrollbarColor: 'black'}}>
            {props.children}
        </div>
    )
};

export default Scroll;