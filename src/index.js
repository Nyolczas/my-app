const process = require('process');
const csv = require('csv-parser');  
const fs = require('fs');

var e = process.env;

var filepath = 'C:' + e.HOMEPATH + '/Documents/Tozsde/MT4ek/Admiral2/MQL4/Files/FullHistory_27019217.csv';

var demoText = [];

fs.createReadStream(filepath)  
  .pipe(csv())
  .on('data', (row) => {
    document.write('<p>'+ String(Object.values(row)) + '</p>');
    console.log(Object.values(row));
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

//document.getElementById("demo").innerHTML = ;