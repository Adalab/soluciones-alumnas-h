import React from 'react';

class Mimimi extends React.Component{
    constructor(props) {
        super(props);
    }

     render(){
         return (
             <p>{this.props.text}</p>
         )
     }
}

export default Mimimi;