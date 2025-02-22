const students = [
    {
        name: "Grace",
        grade: 7
    },
    {
        name: "Jennifer",
        grade: 4
    },
    {
        name: "Paul",
        grade: 10
    },
    {
        name: "John",
        grade: 9
    }
];

function getApprovedStudents(studentList){
    return studentList.filter(student => student.grade >= 7);
}

console.log("Lista de alunos: ");
console.log(students);

console.log("\nAlunos aprovados: ");
console.log(getApprovedStudents(students));

