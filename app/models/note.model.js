const mongoose = require('mongoose');
/*
const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
*/
const IssueSchema = mongoose.Schema({
    pnemonic:String,
    title: String,
    content: String,
    mydate : Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Issue', IssueSchema);

