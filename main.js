function getMatrix() {
    return [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
    ];
}
    

function main() {
    const matrix = getMatrix();

    console.log(matrix[0][0]);
    console.log(matrix[1][1]);
    console.log(matrix[2][2]);
    console.log(matrix[3][3]);
    console.log(matrix[4][4]);
}

main(); 