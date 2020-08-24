import React from 'react';
import './style.css';
const Brick = (props) =>{
    console.log("How does my props look like...",props);
    return(

        <div className="brick-cont">
            {props.abcd}
        </div>
    )
};
export default Brick;