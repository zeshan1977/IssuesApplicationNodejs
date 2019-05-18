module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/issues/create', notes.create);

    // Retrieve all Notes
    app.get('/issues/findAll', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/issues/findone/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/issues/update/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/issues/deleteone/:noteId', notes.delete);
}