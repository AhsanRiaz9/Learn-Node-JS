const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '/data.txt');

// read data from file
fs.readFile(filePath,function(err, data)
{
    if(err){
        console.log('File Does not exit');
    }
    else{
        console.log(data.toString());
    }
});

// write data to file
fs.writeFile(filePath,'BCSF18M009',function(err){
    if(err){
        console.log('Error in file');
    }
    else{
        console.log('File Written Successfully!');
    }
});

// append data to file
fs.appendFile(filePath,' Ahsan Riaz',function(err){
    if(err){
        console.log('Error in file');
    }
    else{
        console.log('File Saved!');
    }
});
