let body = document.body

function appendToChild(element, tag, text, className){
  let stuf = document.createElement(tag)
  stuf.innerText = text;
  element.appendChild(stuf).classList.add(className)
}

appendToChild(body, 'h1', 'Exercício 5.2 - JavaScript DOM')
appendToChild(body, 'main', '', 'main-content')