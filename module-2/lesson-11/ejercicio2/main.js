'use strict';

const searchField = document.querySelector('#search-field');
const searchButton = document.querySelector('#btn-search');
const resultBox = document.querySelector('#results');
const resultList = document.querySelector('#result-list');

function getCharacter(){

    fetch (`https://swapi.co/api/people/?search=${searchField.value}`)
    .then(response => response.json())
    .then( data =>{
        
        const characters = data.results;
        let listContent = '';

        for (let character of characters){
            listContent += `<li>Name: ${character.name}. Sex: ${character.gender}</li>`;
        }
        resultList.innerHTML = listContent;
    })

}

searchButton.addEventListener('click', getCharacter);