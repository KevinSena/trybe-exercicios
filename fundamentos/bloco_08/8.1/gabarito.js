const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparingAnswer = (right, student) => {
  let count = 0;
  for (let i = 0; i < right.length; i += 1) {
    if (right[i] === student[i]) count += 1;
    else if (student[i] !== right[i] && student[i] !== 'N.A') count -= 0.5;
  }
  return count;
};

const points = (right, student, counter) => counter(right, student);

console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, comparingAnswer));
