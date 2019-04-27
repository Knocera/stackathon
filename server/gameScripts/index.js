// This serves as the serverside aggregate exports list for game files.

const GameEngine = require('./gameEngine')
const GameRoom = require('./gameRoom')
const Player = require('./player')




module.exports = {
  GameEngine,
  GameRoom,
  Player
}



// let GameRoomList = {}
// let GameRoomCount = 0
// let PlayerList  = {}
// let PlayerCount = 0
// let SocketList = {}






// io.on("connection", function(socket){
//   SocketList[socket.id] = socket
//   logStats('Connect: ' + socket.id)

//   socket.emit('serverInfo', {
//     Players: PlayerCount,
//     GameRooms: GameRoomCount
//   })
// })


