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

// Bônus

const mathStudents = object => {
  const keyIndex = listKeys(object);
  let allStudentsCount = 0;
  for (let i = 0; i < keyIndex.length; i += 1) {
    const lesson = object[keyIndex[i]]
    lesson.materia === 'Matemática' ? allStudentsCount += lesson.numeroEstudantes : false;
  }
  return allStudentsCount;
}

// console.log(mathStudents(allLessons));

const createReport = (object, teacher) => {
  const keyIndex = listKeys(object);
  const relatorio = {};
  let subject =[];
  let studentsCount = 0
  for (let i = 0; i < keyIndex.length; i += 1) {
    const lesson = object[keyIndex[i]]
    if (lesson.professor === teacher) {
      subject.push(lesson.materia)
      studentsCount += lesson.numeroEstudantes
    }
  }
  relatorio.professor = teacher
  relatorio.aulas = subject
  relatorio.estudantes = studentsCount
  return relatorio;
}

console.log(createReport(allLessons, 'Maria Clara'));
