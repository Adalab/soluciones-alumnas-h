'use strict';

const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const printedName = document.querySelector('#printed-name');
const printedSurname = document.querySelector('#printed-surname');

let fullName = [];

function pushName(){
    fullName.push(inputName.value);
    console.log(fullName);
}

function pushSurname(){
    fullName.push(inputSurname.value);
    console.log(fullName);

    saveFullName();
}

function printFullName(){
    printedName.innerHTML = inputName.value + ' ';
    printedSurname.innerHTML = inputSurname.value;
}

function saveFullName(){
    localStorage.setItem('full name',  JSON.stringify(fullName));
}

function getFullName(){

    if (localStorage.getItem('full name') !== null ){
    fullName = JSON.parse(localStorage.getItem('full name'));
    console.log(fullName);
    printedName.innerHTML = fullName[0] + ' ';
    printedSurname.innerHTML = fullName[1];
    inputName.value = fullName[0];
    inputSurname.value = fullName[1];
    } else{
        console.log("No existe 'full name' en localStorage");
    }
}

inputName.addEventListener('keyup', printFullName);
inputSurname.addEventListener('keyup', printFullName);
inputName.addEventListener('change', pushName);
inputSurname.addEventListener('change', pushSurname);
window.addEventListener('load', getFullName);