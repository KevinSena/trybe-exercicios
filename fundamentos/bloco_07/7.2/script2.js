const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKeyValue = (object, key, value) => {
  const obj = {}
  obj[key] = value
  Object.assign(object, obj)
};
addKeyValue(lesson2, 'turno', 'noite');

const listKeys = object => Object.keys(object);
const lengthOf = object => Object.keys(object).length;
const listValues = object => Object.values(object);

const allLessons = {};

addKeyValue(allLessons, 'lesson1', lesson1)
addKeyValue(allLessons, 'lesson2', lesson2)
addKeyValue(allLessons, 'lesson3', lesson3)

const allStudents = object => {
  const keyIndex = listKeys(object);
  let allStudentsCount = 0;
  for (let i = 0; i < keyIndex.length; i += 1) {
    allStudentsCount += object[keyIndex[i]].numeroEstudantes;
  }
  return allStudentsCount;
};

const getValueByNumber = (object, n) => listKeys(object)[n];

const verifyPair = (object, key, value) => object[key] === value ? true : false;

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));