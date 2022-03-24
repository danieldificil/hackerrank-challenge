'use strict';

const fs = require('fs');

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

function timeConversion(s)
{
    let time = s
    let ampm = time.slice(-2)
    let hour = time.slice(0,2)
    let numberHour = Number(hour)

    switch (true)
    {
        case (ampm === "AM"):
        {
            let deleteAM = time.replace("AM","")
            return deleteAM
            break
        }
        
        case (ampm === "PM" && hour != "12"):
        {
            let newNumberHour = numberHour + 12
            let stringHour = String(newNumberHour)
            let deletePM = time.replace("PM","")
            let res = deletePM.replace((deletePM.substring(0 , 2)), `${stringHour}`)
            return res
            break
        }

        case (ampm === "PM" && hour === "12"):
        {
            let zeroHours = "00"
            let deleteOtherPM = time.replace("PM","")
            let res2 = deleteOtherPM.replace((deleteOtherPM.substring(0 , 2)), `${zeroHours}`)
            return res2
            break
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}