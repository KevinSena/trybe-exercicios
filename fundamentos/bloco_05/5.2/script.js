let body = document.body
let main = document.body.getElementsByTagName('main')
let section = document.body.getElementsByTagName('section')
let img = document.body.getElementsByTagName('img')

function appendToChild(element, tag, text, className){
  let stuf = document.createElement(tag)
  stuf.innerText = text;
  element.appendChild(stuf).classList.add(className)
}

function putSrc(element, src) {
  element.src = src
}

appendToChild(body, 'h1', 'Exercício 5.2 - JavaScript DOM')
appendToChild(body, 'main', '', 'main-content')
appendToChild(main[0], 'section', '', 'center-content')
appendToChild(main[0], 'section', '', 'left-content')
appendToChild(main[0], 'section', '', 'right-content')
appendToChild(section[0], 'p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum, adipisci harum eaque placeat quaerat ipsam omnis fugit praesentium debitis rerum at fuga error quas aliquam, a nesciunt corrupti unde?')
appendToChild(section[1], 'img', '', 'small-image')
putSrc(img[0], "https://picsum.photos/200")