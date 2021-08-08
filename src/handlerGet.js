const notes = require('./notes');

// getAllNotes
const getNotes = () => ({
  status: 'success',
  data: {
    notes : notes.map((note) => {
      return {
        'title': note.title, 
        'tags': note.tags, 
        'body': note.body,
      }
    })
  },
});
 
// getNoteById
const getNoteById = (request, h) => {
  // request params untuk mengambil nilai id dari URL
  const {id} = request.params;
  const note = notes.filter((note) => note.id === id)[0];
  if (note !== undefined) {
    const response = h.response({
      status: 'success',
      data: {note},
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Id note tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {getNotes, getNoteById};
