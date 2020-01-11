const ENDPOINT = 'https://randomuser.me/api/?results=10';

const fetchUsers = () => fetch(ENDPOINT).then(response => response.json());

export {fetchUsers};