import React from 'react';

class SheepCounter extends React.Component{
    constructor(props){
        super(props);
        this.arrayOfSheeps = [];
        this.state = {
            counter: 0,
            sheeps: ''
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.arrayOfSheeps.push(<div className="sheep"></div>);
        this.setState({
            counter: this.state.counter + 1,
            sheeps: this.arrayOfSheeps.map(sheep => sheep)
        })
        console.log(this.state.sheeps);
    }

    render(){
        return(
            <div>
                <span className="sheep-counter-number">{this.state.counter}</span>
                <div className="sheeps">
                    {this.state.sheeps}
                </div>
                <button className="count-sheeps" type="button" onClick={this.clickHandler}>bheee</button>
            </div>
        )
    }
}

export default SheepCounter;