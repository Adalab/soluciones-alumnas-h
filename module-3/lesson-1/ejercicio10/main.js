'use strict';

const pin = 5232;

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const pinUser = users.find(user => user.pin === pin);

console.log(pinUser);

const pinUserIndex = users.findIndex(user => user.pin === pin);

users.splice(pinUserIndex, 1);

console.log(users);
