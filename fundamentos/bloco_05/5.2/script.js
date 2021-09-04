let body = document.body

function appendToChild(element, tag, text){
  let stuf = document.createElement(tag)
  stuf.innerText = text;
  element.appendChild(stuf)
}

appendToChild(body, "h1", 'Exercício 5.2 - JavaScript DOM')