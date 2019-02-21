// intialization file
console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes')

var user = os.userInfo();

fs.appendFile('greetings.txt', `hello ${user.username}!`, function (err) {
    if (err) {
        console.log('unable to write to file');
    }
});