const notes = require('./notes');

const editNote = (request, h) => {
  // Mengambil data id di URL 
  let {id} = request.params;
  // Mengambil data dari sisi klien
  const {
    title,
    tags,
    body,
  } = request.payload;
  const updatedAt = new Date().toISOString();
  // memasukkan note yang di ubah ke note.js
  const newNoteData = {
    title,
    tags,
    body,
    updatedAt,
  };
  // check title must not empty
  if (newNoteData.title === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi judul catatan',
    });
    response.code(400);
    return response;
  }
  // check tags must not empty
  if (newNoteData.tags === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi tags catatan',
    });
    response.code(400);
    return response;
  }
  // check body must not empty
  if (newNoteData.body === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi body catatan',
    });
    response.code(400);
    return response;
  }
  // check if index is exist
  id = notes.findIndex((note) => note.id === id);
  if (id !== -1) {
    notes[id] = {
      ...notes[id], 
      title, 
      tags, 
      body, 
      updatedAt,
    }
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }  
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
}
 
module.exports = {editNote};
