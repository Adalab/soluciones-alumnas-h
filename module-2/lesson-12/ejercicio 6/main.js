'use strict'

const wrapper = document.querySelector('.wrapper')

const createText = () => {
    for (let i = 0; i < 100; i++) {
        const newElement = document.createElement('p')
        newElement.classList.add('text')
        const newContent = document.createTextNode('lorem ipsum que largo es esto');
        newElement.appendChild(newContent);
        wrapper.appendChild(newElement);
        const newSelect = document.createElement('select');
        newSelect.classList.add('select')
        const contentSelect = document.createElement('option');
        contentSelect.value = 'white'
        contentSelect.innerHTML = 'white';
        const contentSelect2 = document.createElement('option');
        contentSelect2.value = 'green'
        contentSelect2.innerHTML = 'green'
        newSelect.appendChild(contentSelect)
        newSelect.appendChild(contentSelect2)
        wrapper.appendChild(newSelect);
    }

}
createText()


const newP = document.querySelector('.text');
const select = document.querySelector('.select');

select.addEventListener('change', (event) => {

    if (event.target.value == 'green') {
        newP.style = "color:green;";
    }
    else {
        newP.style = "color: white;"
    }
}
)
//sólo funciona en al primer parrafo la función de cambiar el color

