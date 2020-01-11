import React from 'react';

class Numbers extends React.Component {
    constructor(props) {
        super(props);
        this.numberArray = [1, 4, 6, 8, 45, 89];
        this.state = {
            inputNumber: 0,
            even: false
        }
        this.paintNumbers = this.paintNumbers.bind(this);
        this.getImputNumber = this.getImputNumber.bind(this);
        this.getCheckboxValue = this.getCheckboxValue.bind(this);
    }

    paintNumbers(){
        const numbers = this.numberArray
        .filter(n => n > this.state.inputNumber)
        .filter(n => this.state.even === true ? n % 2 === 0 : n)
        .map((n,i) => <li key={i}>{n}</li>);

        return numbers; 
    }

    getImputNumber(event){
        this.setState({
            inputNumber: event.target.value
        })
    }

    getCheckboxValue(event){
        if(event.target.checked === true){
            this.setState({
                even: true
            })
        } else {
            this.setState({
                even: false
            })
        }
    }

    render() {

        return(
            <div>
                <ul>
                    {this.paintNumbers()}
                </ul> 
                <form action="" method="POST">
                    <input type="number" value={this.state.inputNumber} onChange={this.getImputNumber}></input>
                    <input type="checkbox" id="even-numbers" onClick={this.getCheckboxValue}></input>
                    <label htmlFor="even-numbers">Even only.</label>
                </form>
            </div>
        )
    }
}

export default Numbers;