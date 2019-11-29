'use strict'
const data = [
    {
        name: 'María',
        lastname: 'Vera',
        phone: 5552424,
    },
    {
        name: 'Pepa',
        lastname: 'Pérez',
        phone: 5552555
    },
    {
        name: 'Alfreda',
        lastname: 'Dominguez',
        phone: 5556865,
    }
]

const inputN = document.querySelector('#firstName');
const inputL = document.querySelector('#lastName');
const inputP = document.querySelector('#phone');
const select = document.querySelector('#userInfo')
const fillForm = () => {
    if (select.value == 'user1') {
        inputN.value = data[0].name
        inputL.value = data[0].lastname
        inputP.value = data[0].phone
    }
    if (select.value == 'user2') {
        inputN.value = data[1].name
        inputL.value = data[1].lastname
        inputP.value = data[1].phone
    }
    if (select.value == 'user3') {
        inputN.value = data[2].name
        inputL.value = data[2].lastname
        inputP.value = data[2].phone
    }
    else { console.log('error') }
}
select.addEventListener('change', fillForm);
