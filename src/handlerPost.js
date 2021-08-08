const {nanoid} = require('nanoid');
const notes = require('./notes');
 
// Menambahkan catatan
const addNote = (request, h) => {
  // request payload untuk mengambil data yang dikirimkan melalui HTTP
  const {title, tags, body} = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString;
  const updatedAt = createdAt;  
  // add those value to notes
  const newNote = {id, title, tags, body, createdAt, updatedAt};
  notes.push(newNote);

  // check title must not empty
  if (newNote.title === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi judul catatan',
    });
    response.code(400);
    return response;
  }
  // check tags must not empty
  if (newNote.tags === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi tags catatan',
    });
    response.code(400);
    return response;
  }
  // check body must not empty
  if (newNote.body === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi body catatan',
    });
    response.code(400);
    return response;
  }

  const isSuccess = notes.filter((note) => note.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambah',
      data: {noteId: id},
    })
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambah',
  });
  response.code(400);
  return response;
};

module.exports = {addNote};