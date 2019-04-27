const {GameEngine, GameRoom, Player} = require('../gameScripts')

let GameRoomList = {}
let GameRoomCount = 0
let PlayerList  = {}
let PlayerCount = 0
let SocketList = {}

//potentially create action creator list for debgging purposes


module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    SocketList[socket.id] = socket
    logStats('Connect: ' + socket.id)

    socket.emit('serverInfo', {
      Players: PlayerCount,
      GameRooms: GameRoomCount
    })



    //Creatign a room requires/data will = : host, roomName, roomCode

    socket.on('createRoom', (data) => {
     createRoom(socket, data)})


    //join room requires the same data as create room
    socket.on('joinRoom', (data) => {
     joinRoom(socket, data)})

    // When client leaves the room we will remove them from the rooms player list
    socket.on('leaveRoom', () => {
     leaveRoom(socket)})

     //called when a client closes the browser or loses connection
    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
      socketDisconnect(socket)
    })

    //Things  I need:  Join Team, New Game, endTurn, Submit clue, Vote

    // Join team need team designatio
    // First make sure the player doesnt already exist
    // Add player to the player list
    // set players team value
    // update the game room to reflect the new player
    socket.on('joinTeam', (data) => {
      if (!PlayerList[socket.id]) {return}
      let  player = PlayerList[socket.id]
      player.team = data.team
      gameUpdate(player.room)
    })


  })
}

// // const getApiAndEmit = (socket) =>{
// //   socket.emit('FromServer', {'test': 'data'})
// // }
// io.on("connection", function(socket){
//   //   SocketList[socket.id] = socket
//   //   logStats('Connect: ' + socket.id)

//   //   socket.emit('serverInfo', {
//   //     Players: PlayerCount,
//   //     GameRooms: GameRoomCount
//   //   })
//   // })
