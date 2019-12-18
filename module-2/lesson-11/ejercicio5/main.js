'use strict';

const itemBody = document.querySelector('body');
const inputLight = document.querySelector('#light');
const inputDark = document.querySelector('#dark');
const lightValue = inputLight.value;
const darkValue = inputDark.value;

function setTheme(){
    if (inputLight.checked){
        itemBody.classList.add('light');
        itemBody.classList.remove('dark');
    }
    
    if (inputDark.checked){
        itemBody.classList.add('dark');
        itemBody.classList.remove('light');
    }

    saveTheme();
}

function saveTheme(){

    if(inputLight.checked){
        localStorage.setItem('theme', lightValue);
    }

    if(inputDark.checked){
        localStorage.setItem('theme', darkValue);
    }
}

function getTheme(){

    if(localStorage.getItem('theme') === lightValue){
        itemBody.classList.add('light');
        itemBody.classList.remove('dark');
    }

    if(localStorage.getItem('theme') === darkValue){
        itemBody.classList.add('dark');
        itemBody.classList.remove('light');
    }
}

window.addEventListener('load', getTheme);
inputLight.addEventListener('change', setTheme);
inputDark.addEventListener('change', setTheme);




