let paragraph = document.getElementsByTagName('p')
let mainContent = document.getElementsByClassName('main-content')
let centerContent = document.getElementsByClassName('center-content')

function changeText(element, text) {
  element[1].innerText = text;
}

function changeBgColor(element, color) {
  element[0].style.backgroundColor = color;
}

changeText(paragraph, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum corrupti quo dicta cupiditate error fugiat deserunt, doloremque ipsam asperiores aspernatur nihil voluptates sapiente sunt quia libero repellendus excepturi mollitia!')

changeBgColor(mainContent, 'rgb(76,164,109)')

changeBgColor(centerContent, 'white')