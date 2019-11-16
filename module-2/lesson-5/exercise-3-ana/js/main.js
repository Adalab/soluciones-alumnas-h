'use strict';

const text = document.querySelector('.text');

text.addEventListener('mouseover', function addElement() {
    // text.innerHTML = text.innerHTML + text.innerHTML;
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = text.innerHTML;
    document.querySelector('body').insertBefore(newParagraph, document.querySelector('script'));


});