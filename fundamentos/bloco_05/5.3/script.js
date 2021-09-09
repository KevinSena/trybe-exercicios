function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Utilities
function addClass(element, className) {
  element.classList.add(className)
}

function q(params) {
  return document.body.querySelector(params);
}

function appendToChild(element, tag, text, className, id){
  let stuf = document.createElement(tag)
  stuf.innerText = text;
  element.appendChild(stuf).classList.add(className)
  stuf.id = id
}

function loopDias(indice, array, element, className) {
  for (const iterator of array) {
    if (iterator === indice) {
      addClass(element, className);
    }
  }
}

// Escreva seu código abaixo.

// Task 1

function createDaysOfMonth() {
  const friday = [4, 11, 18, 25];
  const holiday = [24, 25, 31];
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let ul = q('ul#days');
    let lastLi = ul.getElementsByTagName("li");

    appendToChild(ul, 'li', dezDaysList[i], 'day', '');
    loopDias(dezDaysList[i], holiday, lastLi[i], 'holiday');
    loopDias(dezDaysList[i], friday, lastLi[i], 'friday');
  }
}

createDaysOfMonth();

// Task 2
let buttonContainer = q('.buttons-container');

appendToChild(buttonContainer, 'button', 'Feriados', '', 'btn-holiday')

// Task 3