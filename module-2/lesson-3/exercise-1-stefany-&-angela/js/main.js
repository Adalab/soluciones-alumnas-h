'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';
//let userAvatar = '';

const userAvatarNode = document.querySelector('.user__avatar');
const finalUserAvatar = userAvatar || DEFAULT_AVATAR;

userAvatarNode.setAttribute('src', finalUserAvatar);

/*O usar:
userAvatarNode.src = userAvatar || DEFAULT_AVATAR;*/
