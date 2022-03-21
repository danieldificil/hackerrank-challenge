'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function miniMaxSum(arr) 
{
    let Arr = arr
    let n = arr.length
    let sorted = Arr.sort((a, b) => a - b)
    let sumMini = sorted[0] + sorted[1] + sorted[2] + sorted[3]
    let sumMax = sorted[n-1] + sorted[n-2] + sorted[n-3] + sorted[n-4]
    console.log(`${sumMini} ${sumMax}`) 
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
