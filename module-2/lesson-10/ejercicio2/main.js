'use strict';

function getDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
      .then(response => response.json())
      .then(data => {
        const img = document.querySelector("img");
        img.src = data.message;
        img.alt = "Un perro";
      });
  }
const btn = document.querySelector(".js-dog");
window.addEventListener("load", getDogImage);
btn.addEventListener("click", getDogImage);