function keyValue(student) {
    if (student.name) {
        student.name = 'sudhir';
    }
    return student;
}
let student = {
    name: 'pooja',
    id: 123,
    city: 'pune'
}

console.log(keyValue(student));