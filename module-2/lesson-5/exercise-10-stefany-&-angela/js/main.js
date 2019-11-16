'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const button = document.querySelector('.button');

function createFilm(filmName, filmListNode) {
  const filmNode = document.createElement('li');

  filmNode.classList.add('film');
  filmNode.innerText = filmName;

  filmListNode.appendChild(filmNode);

  filmNode.addEventListener('click', () => {
    console.log(filmName);
  });
}

function showFilms() {
  button.setAttribute('disabled', true);

  const filmList = document.createElement('ul');

  filmList.classList.add('film-list');

  createFilm(inception, filmList);
  createFilm(theButterFlyEffect, filmList);
  createFilm(eternalSunshineOfTheSM, filmList);
  createFilm(blueVelvet, filmList);
  createFilm(split, filmList);
  
  document.body.appendChild(filmList);
}

button.addEventListener('click', showFilms);
