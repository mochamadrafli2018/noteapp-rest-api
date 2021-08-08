const {getNotes, getNoteById} = require('./handlerGet')
const {addNote} = require('./handlerPost')
const {deleteNote} = require('./handlerDelete')
const {editNote} = require('./handlerPut')

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: getNotes,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteById,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNote,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNote,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNote,
  }
]

module.exports = routes;