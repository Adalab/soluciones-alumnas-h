import React from 'react';
import CityImage from './Ejercicio5-CityImage';
import CitySelector from './Ejercicio5-CitySelector';

class Destiny extends React.Component {

  constructor(props) {
    super(props);
    this.myDestination= 'Buenos Aires';
    this.onChangeListener = this.onChangeListener.bind(this);
  };
  
  onChangeListener(value){
    this.myDestination = value;
    this.forceUpdate();
  };

  render(){
    return (
      <div>
        <CitySelector
          onChangeListener={this.onChangeListener}
        />
        <CityImage
          city={this.myDestination}
        />
      </div>
    );
  }
};

export default Destiny;