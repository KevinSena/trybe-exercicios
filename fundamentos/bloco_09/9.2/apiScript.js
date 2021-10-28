const API_URL = 'https://icanhazdadjoke.com/';
const q = (par) => document.querySelector(par);

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  const result = await fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => data.joke);

  q('#jokeContainer').innerText = result;
};

window.onload = () => fetchJoke();
