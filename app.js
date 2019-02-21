// intialization file
console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes')

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
var filteredArray = _.uniq(['jeremy', 1, 'jeremy', 1, 2, 3, 4]);
console.log(filteredArray);


// var result = notes.add(2, 5);
// console.log(`Result: ${result}`);


// var user = os.userInfo();

// fs.appendFile('greetings.txt', `hello ${user.username}! you are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log('unable to write to file');
//     }
// });