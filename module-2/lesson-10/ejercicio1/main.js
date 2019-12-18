'use strict';

function getEmoji() {
    fetch('https://api.rand.fun/text/password?length=20')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.body.innerHTML = data.result;
    });
};

document.addEventListener('click', getEmoji);