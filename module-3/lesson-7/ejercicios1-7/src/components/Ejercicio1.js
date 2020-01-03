import React from 'react';
//import PropTypes from 'prop-types';

class InputInfo extends React.Component{

  constructor(props){
    super(props);
    this.state = {value: 'Escribe algo.'}
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event){
    this.setState({value: event.target.value});
  }
  
  render(){

    return (
      <div>
        <input type="text" onChange={this.changeHandler}/>
        <p>{this.state.value}</p>
      </div>
    )
  }
}

export default InputInfo;