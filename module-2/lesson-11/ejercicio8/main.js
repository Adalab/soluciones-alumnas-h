'use strict';

const searchField = document.querySelector('#search-field');
const searchButton = document.querySelector('#btn-search');
const resultBox = document.querySelector('#results');
const resultList = document.querySelector('#result-list');

function getCharacter(){

    if (localStorage.getItem(searchField.value) !== null ){
        resultList.innerHTML = JSON.parse(localStorage.getItem(searchField.value));
        console.log('Te lo estoy cogiendo de la cache');
    } else {

        fetch (`https://swapi.co/api/people/?search=${searchField.value}`)
        .then(response => response.json())
        .then( data =>{
            
            const characters = data.results;
            let listContent = '';

            for (let character of characters){
                listContent += `<li>Name: ${character.name}. Sex: ${character.gender}</li>`;
            }
            resultList.innerHTML = listContent;

            localStorage.setItem(searchField.value, JSON.stringify(listContent));
        });
    }

}



searchButton.addEventListener('click', getCharacter);