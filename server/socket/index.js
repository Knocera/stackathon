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


    //I tried to order these in the order they will be called when a user tries to create a new game
     //Events: Create gameroom ==> join the game room ==> join a team ==> select a role ==>
     //        create a new game ==> shuffleBoard? ==> submit clue ==> vote ==> revealCard ==> nextTurn

    //Creatign a room requires/data will = : host, roomName, roomCode
    socket.on('createRoom', (data) => {
     createRoom(socket, data)})

    //join room requires the same data as create room
    socket.on('joinRoom', (data) => {
     joinRoom(socket, data)})


    // Join Team
    // First make sure the player doesnt already exist ==> Add player to the player list-->
    // set players team value to data update the game room to reflect the new player
    // Data = players team selection
    socket.on('joinTeam', (data) => {
      if (!PlayerList[socket.id]) {return}
      let  player = PlayerList[socket.id]
      player.team = data.team
      gameUpdate(player.room)
    })

    //Choose role
    socket.on('chooseRole', (data) => {chooseRole(socket, data)})
    //Create a new game
    socket.on('newGame', ()=> newGame(socket))

    //Spymaster submits a clue, and the clue is shown to all players
    socket.on('submitClue', (data) => {

    })

    // Clicked/Reveal card
    //Need to show which card has been selected
    //Result of clicking a card will depend on player.role. If player.role == Spymaster --> reveal card || guesser --> vote
    //Data = cardClicked (its index),
    socket.on('clickedCard', (data) => {clickedCard(socket, data)})

    //Submit Guess
    //Card with most votes is revealed --> if matches team color --> restart voting phase if revealed card !== team color --> nextTurn()
    // Data = card index with most votes
    socket.on('submitGuess', (data) => {submitGuess(socket, data)})

    // End Turn
    // need seperate end turn functionality as teams may voluntarily end their turn without guessing
    // need to get the Client's room and swith Room.Game.Turn
    // update room to reflect change
    socket.on('endTurn', () => {
      if (!PlayerList.socket.id) {return}
      const room = PlayerList[socket.id].room
      GameRoomList[room].game.nextTurn()
      gameUpdate(room)
    })


    //Clients need to be able to leave.  When client leaves the room we will remove them from the rooms player list
    socket.on('leaveRoom', () => {leaveRoom(socket)})

     //called when a client closes the browser or loses connection
    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
      socketDisconnect(socket)
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
