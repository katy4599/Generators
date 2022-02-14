function* getStudents() {
    yield 'Abbi';
    yield 'DShane';
    yield 'Katy';
    yield 'Lisa';
    yield 'Parish';    
}

function main() {
    const students = getStudents();
    let value = students.next();
    while (!value.done) {
        console.log(value.value);
        value = students.next();
    }
}

main();