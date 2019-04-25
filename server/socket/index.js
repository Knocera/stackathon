module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    console.log('*****socket: ', socket);

    socket.on('FromServer', (data) => {
      console.log('X: ' + data.x, '|  Y: ' + data.y)
      io.emit('newName', (data.x*-1))})

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}

// const getApiAndEmit = (socket) =>{
//   socket.emit('FromServer', {'test': 'data'})
// }
