function* getStudents() {
    yield 'Abbi';
    yield 'DShane';
    yield 'Katy';
    yield 'Lisa';
    yield 'Parish';    
}

function main() {
    const students = getStudents();
    for (student of students) {
        console.log(student);
    }
}

main(); 