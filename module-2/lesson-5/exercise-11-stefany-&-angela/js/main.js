'use strict';

const links = document.querySelectorAll('a');

function disablelinkNav(event) {
  event.preventDefault();
}

links.forEach((link) => {
  link.addEventListener('click', disablelinkNav);
});
