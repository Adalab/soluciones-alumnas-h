'use strict'

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const select = document.querySelector('#city');
const showImg = () => {
    if (select.value == 'madrid') {
        img1.src = "./images/descarga (1).jpeg"
        img2.src = "./images/descarga (2).jpeg"
        img3.src = "./images/descarga.jpeg"
    }
    else if (select.value == 'paris') {
        img1.src = "./images/paris.jpeg"
        img2.src = "./images/paris.jpg"
        img3.src = "./images/descarga(3).jpeg"
    }
    else if (select.value == 'newyork') {
        img1.src = "./images/newyork.jpeg"
        img2.src = "./images/ny.jpeg"
        img3.src = "./images/ny2.jpeg"
    }
}
console.log(select.value)
select.addEventListener('change', showImg);