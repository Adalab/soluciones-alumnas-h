import React from 'react';
//import PropTypes from 'prop-types';

class OnionHater extends React.Component {
  
  constructor(props) {
    super(props);

    this.isHating = false;
    this.onChangeListener = this.onChangeListener.bind(this);
  };

  onChangeListener (event){

    const cebolla = event.target.value.toLowerCase();

    if(cebolla.includes('cebolla')){
      this.isHating = true;
      this.forceUpdate();
    } else {
      this.isHating = false;
      this.forceUpdate();
    }
  };
  
  changeBg(){
    if(this.isHating === true){
      return 'red';
    } else {
      return '';
    }
  };

  render(){
    return (
      <div className={'text-area ' + this.changeBg()} >
        <textarea onChange={this.onChangeListener}></textarea>
      </div>
    );
  }
};

export default OnionHater;