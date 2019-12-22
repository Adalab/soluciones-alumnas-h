import React from 'react';


class CitySelector extends React.Component{

    constructor(props){
        super(props);
        this.myDestination= 'Buenos Aires';
        this.onChangeListener = this.onChangeListener.bind(this);
    }

    onChangeListener(event){
        let value = event.target.value;
        this.props.onChangeListener(value);
    }

    render(){
        return(
            <select onChange={this.onChangeListener}>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Sidney">Sidney</option>
                <option value="Praga">Praga</option>
                <option value="Boston">Boston</option>
                <option value="Tokyo">Tokyo</option>
            </select>
        )
    }
}

export default CitySelector;



        