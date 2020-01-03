import React from 'react';

const getRandomInteger = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const minSize = 200;
const maxSize = 400;

class RandomMurray extends React.Component {
  render() {
    const randomMurray = getRandomInteger(minSize, maxSize);

    return (
      <img
        src={`http://www.fillmurray.com/200/${randomMurray}`}
        alt="Random murray"
      />
    );
  }
}

export default RandomMurray;