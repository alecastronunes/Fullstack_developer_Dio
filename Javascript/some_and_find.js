const students = [
  { nome: "Alexandre", grade: 8.0 },
  { name: "Rebeca", grade: 7.5 },
  { name: "Carlos", grade: 5 },
  { name: "Cristofer", grade: 3.9 },
];

students.some((student) => {
  console.log(student.grade >= 7);
});

students.find((student) => {
  console.log(student.grade >= 7);
});

const index = students.findIndex((student) => student.grade >= 7);

console.log(index);

const aprovedStudents = students.map(student => student.grade >= 7);

console.log(aprovedStudents);
