'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
// let userAvatar = 'http://www.fillmurray.com/300/300';

const ImageAvatar = document.querySelector('.user__avatar');


let userAvatar = '';


ImageAvatar.setAttribute('src', userAvatar || DEFAULT_AVATAR);