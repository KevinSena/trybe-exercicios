let paragraph = document.getElementsByTagName('p')

function changeText(param, text) {
  param[1].innerText = text;
}

changeText(paragraph, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum corrupti quo dicta cupiditate error fugiat deserunt, doloremque ipsam asperiores aspernatur nihil voluptates sapiente sunt quia libero repellendus excepturi mollitia!')