'use strict';

const list = document.querySelector('.list');

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

list.innerHTML =
  `<li>
    <img src=${firstDogImage}></img>
    <p>${firstDogName}</p>
  </li>

  <li><img src=${secondDogImage}></img><p>${secondDogName}</p></li>

  <li><img src=${thirdDogImage}></img><p>${thirdDogName}</p></li>`
console.log();