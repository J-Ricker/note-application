// intialization file
console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes')

var result = notes.add(2, 5);
console.log(`Result: ${result}`);


// var user = os.userInfo();

// fs.appendFile('greetings.txt', `hello ${user.username}! you are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log('unable to write to file');
//     }
// });