// intialization file
console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command === 'add') {
    console.log('adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('removing note');
} else {
    console.log('Command not recongnized');
}