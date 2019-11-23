'use strict';

const firstText = document.querySelector('.firstText');
const secondText = document.querySelector('.secondText');
firstText.addEventListener('mouseover', () => secondText.classList.remove('hidden'));



