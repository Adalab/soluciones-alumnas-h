'use strict';

function getEmoji() {
    fetch('https://api.rand.fun/text/password?length=20')
    .then(function(response) {
        return response.html();
    })
    .then(function(data) {
        document.body.innerHTML = data.result;
    })
    .catch(error => console.log(`Ha sucedido un error: ${error}`));
    
};

document.addEventListener('click', getEmoji);