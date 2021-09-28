const listKeys = object => Object.keys(object);
const lengthOf = object => Object.keys(object).length;
const listValues = object => Object.values(object);

const allLessons = {};

addKeyValue(allLessons, 'lesson1', lesson1)
addKeyValue(allLessons, 'lesson2', lesson2)
addKeyValue(allLessons, 'lesson3', lesson3)

const allStudents = object => {
  const keyIndex = listKeys(object);