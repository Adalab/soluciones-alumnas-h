const ENDPOINT = 'https://randomuser.me/api/?results=50';

const fetchResults = () => fetch(ENDPOINT).then(response => response.json());

export { fetchResults };