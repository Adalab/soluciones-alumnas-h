'use strict';

const getEl = (htmlElement) => document.querySelector(htmlElement);

const btnEl = getEl('.btn')

console.log(btnEl.innerHTML);