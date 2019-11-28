'use strict';

const elementInput = document.querySelector('#input--user');
const searchButton = document.querySelector('#search');
const infoContainer = document.querySelector('#container--list');
const repoList = document.querySelector('#repo-list');
const orgName = document.querySelector('#org-name');

function getRepos() {
    infoContainer.classList.remove('hidden');
    orgName.innerHTML = `Estos son los repos de ${elementInput.value}:`;

    const URL = "https://api.github.com/orgs/" + elementInput.value;

    fetch(URL)
      .then(orgResponse => orgResponse.json())
      .then(orgData => {
        const org = orgData.repos_url;
        return fetch(org);
      })
      .then(reposResponse => reposResponse.json())
      .then(reposData => {

        for (let repo of reposData){
          const elementLi = document.createElement('li');
          elementLi.innerHTML = repo.name;
          repoList.appendChild(elementLi);
        }
      });
  }
  
searchButton.addEventListener("click", getRepos);