import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.date = new Date();
        this.state = {
            hours: this.date.getHours(),
            minutes: this.date.getMinutes(),
            seconds: this.date.getSeconds()
        }
        setInterval(()=>{this.updateClock()}, 1000);
        this.updateClock = this.updateClock.bind(this);
    }

    updateClock(){
        const newDate = new Date();
        this.setState({
            hours: newDate.getHours(),
            minutes: newDate.getMinutes(),
            seconds: newDate.getSeconds()
        });
    }

    render(){
        return(
            <div className="clock">
                <span>{this.state.hours} : </span>
                <span>{this.state.minutes} : </span>
                <span>{this.state.seconds}</span>
            </div>
        )
    }
}

export default Clock;