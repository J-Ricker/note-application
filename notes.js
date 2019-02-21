console.log('starting notes.js');
const fs = require('fs');


var addNotes = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log(`Getting note: ${title}`);
}

var removeNote = (title) => {
    console.log(`Are you sure you want to remove note: ${title}?`);
}

module.exports = {
    addNotes,
    getAll,
    getNote,
    removeNote
};