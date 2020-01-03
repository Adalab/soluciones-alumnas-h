import React from 'react';

class FreshFruit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            popularFruits: ['kiwi', 'pinneaple', 'strawberry'],
            newFruit: ''
          };
        this.paintFruits = this.paintFruits.bind(this);
        this.createNewFruit = this.createNewFruit.bind(this);
        this.addNewFruit = this.addNewFruit.bind(this);
        this.removeFruit = this.removeFruit.bind(this);
    }

    paintFruits(){
        return this.state.popularFruits.map(fruit => <li>{fruit} <button value={fruit} type="button" onClick={this.removeFruit}>x</button></li>)
    }

    createNewFruit(event){
        this.setState({
            newFruit: event.target.value
        })
    }

    addNewFruit(event){
        event.preventDefault();

        let fruit = this.state.newFruit;
        this.setState(prevState => {
            return {
              popularFruits: [
                ...prevState.popularFruits,
                fruit
              ]
            };
          });
        console.log(this.state.popularFruits);
    }

    removeFruit(event){
        event.preventDefault();

        let fruitToRemove = event.target.value;
        console.log(fruitToRemove);
        this.setState(prevState => {
            const newPopularFruits = prevState.popularFruits.filter(fruit=> fruit !== fruitToRemove)
            return {
              popularFruits: [
                ...newPopularFruits
              ]
            };
          });
    }

    render(){
        return(
            <div>
                <ul>
                    {this.paintFruits()}
                </ul>
                <form onSubmit={this.addNewFruit}>
                    <input type="text" onChange={this.createNewFruit}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default FreshFruit;