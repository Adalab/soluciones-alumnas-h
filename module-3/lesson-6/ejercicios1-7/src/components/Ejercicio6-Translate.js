import React from 'react';
import Mimimi from './Ejercicio6-Mimimi';
import TextInput from './Ejercicio6-TextInput';

class Translate extends React.Component{
    constructor(props){
        super(props);
        this.myText='';
        this.translateThis=this.translateThis.bind(this)
    }
    
    translateThis(text){
        this.myText= text.replace(/[aeiou]/ig, 'i');
        this.forceUpdate();
    }


    render(){
        return(
            <div>
                <TextInput
                    translateThis = {this.translateThis}
                />
                <Mimimi
                    text={this.myText}
                />
            </div>
        )
    }
}

export default Translate;