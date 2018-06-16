console.log('Starting App');

const fs = require('fs');
const os = require ('os');
const _ = require ('lodash');
const ex = require ('./notes.js');

const user =  os.userInfo();

fs.appendFile('greeting.tx' , 'Hello Worlqd ! ' + user.username , function (err){
    if(err){
        console.log('Not Able to write file');
    }
})


fs.appendFileSync(`greeetings.txt` , `This is syncronous method ${user.username}   and yor are is ${ex.addNote ()}` );

