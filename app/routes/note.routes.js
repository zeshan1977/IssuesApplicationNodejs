module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/createone', notes.create);

    // Retrieve all Notes
    app.get('/findAll', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/findone/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/update/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/deleteone/:noteId', notes.delete);
}
