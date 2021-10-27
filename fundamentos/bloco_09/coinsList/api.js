const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false';
// const q = (par) => document.querySelector(par);

const myObject = {
  method: 'GET',
  headers: { accept: 'application/json' },
};

fetch(API_URL, myObject)
  .then((response) => response.json())
  .then((data) => console.log(data));
