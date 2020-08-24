import React from 'react';
import Brick from '../Brick/brick.js';
import './style.css';

class Wall extends React.Component{
    

    constructor(props){
        super(props);
        this.state = {
            bricks:[1,2,3,4]
        };
    }

    addMoreBricks = () => {
        
        //this.state.bricks.push(5);
        //console.log(this.state.bricks);
        const newBricksArray=[ ...this.state.bricks ]
        newBricksArray.push(newBricksArray.length+1);
        this.setState({
            bricks: newBricksArray
        });
    };

    render = () => {
        return(
            <div className="wall-container">
                {
                    this.state.bricks.map( (brick) => {
                        return <Brick key={brick} abcd={brick}/>;
                    } )
                }
                <button className="cool" onClick={this.addMoreBricks}>Add More</button>
                    
            </div>
        )
    };
};

export default Wall;