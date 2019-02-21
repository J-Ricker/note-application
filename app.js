// intialization file
console.log('starting app');

const fs = require('fs');
fs.appendFile('greetings.txt', 'hello-world', function (err) {
    if (err) {
        console.log('unable to write to file');
    }
});