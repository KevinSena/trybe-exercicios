let paragraph = document.getElementsByTagName('p')
let mainContent = document.getElementsByClassName('main-content')
let centerContent = document.getElementsByClassName('center-content')
let title = document.getElementsByClassName('title')

function changeText(element, i ,text) {
  element[i].innerText = text;
}

function changeBgColor(element, color) {
  element[0].style.backgroundColor = color;
}

changeText(paragraph, 1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum corrupti quo dicta cupiditate error fugiat deserunt, doloremque ipsam asperiores aspernatur nihil voluptates sapiente sunt quia libero repellendus excepturi mollitia!')

changeBgColor(mainContent, 'rgb(76,164,109)')

changeBgColor(centerContent, 'white')

changeText(title, 0, 'Exercício 5.1 - JavaScript')