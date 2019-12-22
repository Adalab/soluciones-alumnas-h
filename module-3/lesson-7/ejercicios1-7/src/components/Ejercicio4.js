import React from 'react';

class SheepCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        return(
            <div>
                <span className="sheep-counter">{this.state.counter}</span>
                <button className="count-sheeps" type="button" onClick={this.clickHandler}>bheee</button>
            </div>
        )
    }
}

export default SheepCounter;