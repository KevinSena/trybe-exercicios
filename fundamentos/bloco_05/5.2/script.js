let body = document.body
let main = tag('main')
let section = tag('section')
let img = tag('img')
let ul = tag('ul')
let listItems = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']

function appendToChild(element, tag, text, className){
  let stuf = document.createElement(tag)
  stuf.innerText = text;
  element.appendChild(stuf).classList.add(className)
}

function putSrc(element, src) {
  element.src = src
}

function tag(params) {
  return document.body.getElementsByTagName(params)
}

function loopElements(element, tag, array, className) {
  for (const iterator of array) {
    appendToChild(element, tag, iterator, className)
  }
}

appendToChild(body, 'h1', 'Exercício 5.2 - JavaScript DOM', 'title')
appendToChild(body, 'main', '', 'main-content')
appendToChild(main[0], 'section', '', 'center-content')
appendToChild(main[0], 'section', '', 'left-content')
appendToChild(main[0], 'section', '', 'right-content')
appendToChild(section[0], 'p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum, adipisci harum eaque placeat quaerat ipsam omnis fugit praesentium debitis rerum at fuga error quas aliquam, a nesciunt corrupti unde?', 'paragraph')
appendToChild(section[1], 'img', '', 'small-image')
appendToChild(section[2], 'ul', '', 'unorded_list')

putSrc(img[0], "https://picsum.photos/200")

loopElements(ul[0], 'li', listItems)
loopElements(main[0], 'h3', Array(3).fill("Lorem Ipsum"), 'description')