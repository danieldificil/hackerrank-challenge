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
        case (ampm === "AM" && hour === "12"):
        {
            let zeroHours = "00"
            let deleteAM = time.replace("AM","")
            let res = deleteAM.replace((deleteAM.substring(0 , 2)), `${zeroHours}`)
            return res
            break
        }

        case (ampm === "AM" && hour !== "12"):
        {
            let deleteAM2 = time.replace("AM","")
            return deleteAM2
            break
        }
        
        case (ampm === "PM" && hour === "12"):
        {
            let deletePM = time.replace("PM","")
            return deletePM
            break
        }
        
        case (ampm === "PM" && hour !== "12"):
        {
            let newNumberHour = numberHour + 12
            let stringHour = String(newNumberHour)
            let deletePM2 = time.replace("PM","")
            let res2 = deletePM2.replace((deletePM2.substring(0 , 2)), `${stringHour}`)
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