// var obj = {
//     name: 'Jeremy'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// var personString = '{"name": "Jeremy", "age": 25}';
// var person = JSON.parse(personString);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

//originalnotestring
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
