const notes = require('./notes');
 
const deleteNote = (request, h) => {
  // Mengambil data id dari URL
  const {id} = request.params;
  // Check if index is exist
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    // Remove 1 element of notes array at index position
    notes.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Note berhasil dihapus',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Note gagal dihapus, id tidak ditemukan',
  });
  response.code(404);
  return response;
};
 
module.exports = {deleteNote}
