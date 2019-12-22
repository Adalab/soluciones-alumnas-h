import React from 'react';

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {bg: ''}
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState((prevState, props) => ({bg: prevState.bg === '' ? 'change-bg' : ''}));
    }

    render(){
        return(
            <div className={'square ' + this.state.bg} onClick={this.clickHandler}></div>
        )
    }
}

export default Square;