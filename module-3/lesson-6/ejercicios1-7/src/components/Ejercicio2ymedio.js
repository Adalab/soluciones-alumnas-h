import React from 'react';

const getRandomInteger = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const minSize = 200;
const maxSize = 400;

// ...
class RandomMurray extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      this.forceUpdate();
    }
  
    render() {
      const randomMurray = getRandomInteger(minSize, maxSize);
  
      return (
        <img
          src={`http://www.fillmurray.com/200/${randomMurray}`}
          alt="Random murray"
          onClick={this.handleClick}
        />
      );
    }
  }

export default RandomMurray;

