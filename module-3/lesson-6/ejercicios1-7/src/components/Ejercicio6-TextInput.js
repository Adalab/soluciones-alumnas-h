import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.myText = '';
        this.translateThis = this.translateThis.bind(this);
    }

    translateThis(event){
        let text = event.target.value;
        this.props.translateThis(text);
        this.forceUpdate();
    }

    render() {
        return(
            <form>
                <textarea onChange={this.translateThis}/>
            </form>
        )
    }
}

export default TextInput;