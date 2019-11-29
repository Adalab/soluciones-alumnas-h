'use strict';

const elementInput = document.querySelector('#input--user');
const searchButton = document.querySelector('#search');
const userName = document.querySelector('#username');
const userAvatar = document.querySelector('#user-avatar');
const repoNumber = document.querySelector('#repo-number');
const infoContainer = document.querySelector('#container--user');

function getUser() {
    infoContainer.classList.remove('hidden');

    const URL = "https://api.github.com/users/" + elementInput.value;

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        userName.innerHTML = data.login;
        userAvatar.src = data.avatar_url;
        userAvatar.alt = `"${data.login}"`;
        repoNumber.innerHTML = data.public_repos;
      });
  }
  
searchButton.addEventListener("click", getUser);