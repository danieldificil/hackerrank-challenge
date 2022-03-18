/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin)
    {
        inputString += inputStdin;
    });

process.stdin.on('end', function() 
    {
    inputString = inputString.split('\n');

    main();
    });

function readLine() 
    {
        return inputString[currentLine++];
    }
function plusMinus(arr) 
{
    let arrt = arr
    let positive = []
    let zero = []
    let negative = []
    let n = arrt.length
    //loop for separe postives,zeros and negatives in arrays
    for (let i in arrt)
    {
        if (arrt[i] > 0)
        {
            positive.push(arrt[i])
        }
        if (arrt[i] === 0)
        {
            zero.push(arrt[i])
        }
        if (arrt[i] < 0)
        {
            negative.push(arrt[i])
        }
    }
    //requested calculation
    let resPositive = (positive.length/n).toFixed(6)
    let resZero = (zero.length/n).toFixed(6)
    let resNegative = (negative.length/n).toFixed(6)
    //requested answer
    console.log(resPositive)
    console.log(resZero)
    console.log(resNegative)
}
function main() 
    {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        plusMinus(arr);
    }
