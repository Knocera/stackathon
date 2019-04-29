// const {GameEngine, GameRoom, Player} = require('../gameScripts')
const words = require('../assets/defaultWords')

let GameRoomList = {}
let GameRoomCount = 0
let PlayerList = {}
let PlayerCount = 0
let SocketList = {}


class GameEngine{
  constructor() {
    this.words = words

    this.init()
    this.red = this.findType('red')
    this.blue = this.findType('blue')
  }
  init() {
    this.board = null
    this.newBoard()
    let turn = 'blue'
    if (this.findType('red') > this.findType('blue')) turn = 'red'
    this.turn = turn
    this.isPlaying = false
    this.winner = null
  }
  checkWin() {
    this.red = this.findType('red')
    this.blue = this.findType('blue')

    if (this.red === 0) {
      this.isPlaying = false
      this.winner = 'red'
    }
    if (this.blue === 0) {
      this.playing = false
      this.winner = 'blue'
    }
  }
  flipCard(index) {
    let card = this.board[index]
    if (!card.flipped) {
      let type = card.type
      card.flipped = true

      if (type === 'death') {
        this.isPlaying = false
        if (this.turn === 'blue') {
          this.winner = 'red'
        } else {
          this.winner = 'blue'
        }
      } else if (type === 'neutral') this.nextTurn()
      else if (type !== this.turn) this.nextTurn()
      this.checkWin()
    }
  }

  findType(type) {
    let counter = 0

    for (let i = 0; i < 25; i++) {
      if (this.board[i].type === type && !this.board[i].flipped) {
        counter++
      }
    }
    return counter
  }
  nextTurn() {
    if (this.turn === 'blue') this.turn = 'red'
    else this.turn = 'blue'
  }

  initializeBoard() {
    let game = []

    for (let i = 0; i < 5; i++) {
      game.push([])
      for (let j = 0; j < 5; j++) {
        game[i][j] = {
          x: i,
          y: j,
          word: null,
          type: undefined,
          isRed: false,
          isBlue: false,
          isAssassin: false,
          isNeutral: true,
          isRevealed: false
        }
      }
    }
    game = game.reduce(function(prev, curr) {
      return prev.concat(curr)
    })
    game[24].isAssassin = true
    game[24].isNeutral = false
    for (let i = 1; i < 9; i++) {
      game[i].isBlue = true
      game[i].type = 'blue'
      game[i].isNeutral = false

      game[i + 10].isRed = true
      game[i + 10].type = 'red'
      game[i + 10].isNeutral = false
    }

    if (Math.random() > 0.5) {
      game[0].isBlue = true
      game[0].type = 'blue'
    } else {
      game[0].isRed = true
      game[0].type = 'red'
    }

    return game
  }
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)) // random index from 0 to i
      ;[array[i], array[j]] = [array[j], array[i]] // swap elements
    }
    return array
  }

  newBoard() {
    this.board = this.shuffle(this.initializeBoard())
    let foundWord = null
    let usedWords = []

    for (let i = 0; i < this.board.length; i++) {
      foundWord = this.words[Math.floor(Math.random() * this.words.length)]
      while (usedWords.includes(foundWord)) {
        foundWord = this.words[Math.floor(Math.random() * this.words.length)]
      }
      usedWords.push(foundWord)
      this.board[i].word = foundWord
    }
    this.red = this.findType('red')
    this.blue = this.findType('blue')
  }
}
class Player {
  constructor(username, room = {}, socket) {
    this.id = socket.id
    this.username = username
    this.room = room
    this.team = undefined
    this.role = 'guesser'

    PlayerCount = PlayerCount + 1
    PlayerList[this.id] = this
  }
  joinTeam(){
    let numInRoom = Object.keys(GameRoomList[this.room].players).length
    if (numInRoom % 2 === 0) this.team = 'blue'
    else this.team = 'red'
  }
}
class GameRoom {
  constructor(host, roomName) {
    this.roomName = roomName
    // this.roomCode = roomCode
    this.players = {}
    this.game = new GameEngine()
    this.host = host

    GameRoomList[this.roomName] = this
    GameRoomCount++
  }
}

//////////////////////// SOCKET FUNCTIONS ///////////////////////



const gameUpdate = room => {
  let gameState = {
    room: room,
    players: GameRoomList[room].players,
    game: GameRoomList[room].game
  }

  console.log('***** gameState: ', SocketList)
  for (let player in GameRoomList[room].players) {
    console.log('*****GameRoom.players: ', GameRoomList[room].players)

    if (SocketList[player]) {
      SocketList[player].emit('gameState', gameState)
    }
  }
}

function logStats(addition) {
  let inLobby = Object.keys(SocketList).length - PlayerCount
  let stats =
    '[R:' + GameRoomCount + ' P:' + PlayerCount + ' L:' + inLobby + '] '
  console.log(stats + addition)
}

const createRoom = (socket, data) => {
  const roomName = data.room
  // const roomCode = data.roomCode
  const userName = data.userName

  if (GameRoomList[roomName]) {
    socket.emit('createResponse', {
      success: false,
      message: 'That room  name is taken'
    })
  } else if (roomName === '') {
    socket.emit('createResponse', {
      success: false,
      message: 'Room name is required'
    })
  } else if (userName === '') {
    socket.emit('createResponse', {
      success: false,
      message: 'Username is required'
    })
  } else {
    GameRoomList[roomName] = new GameRoom(userName, roomName)
    // removed Room code from GameRoom Args

    let player = new Player(userName, roomName, socket)
    PlayerList[socket.id] = player
    player.joinTeam()
    GameRoomList[roomName].players[socket.id] = player

    socket.emit('createResponse', {
      success: true,
      message: 'A new room has been made'
    })

    gameUpdate(roomName)
    logStats(
      socket.id +
        `( ${player.userName} ) CREATED  |  ` +
        GameRoomList[player.room].room +
        '  Players: ' +
        Object.keys(GameRoomList[player.room].players).length
    )
  }
}

const joinRoom = (socket, data) => {
  const roomName = data.room
  // const roomCode = data.roomCode
  const userName = data.userName
  console.log(PlayerList[socket.id])
  if (!GameRoomList[roomName]) {
    socket.emit('joinResponse', {
      success: false,
      message: 'That room doesnt exist'
    })
    // } else if (GameRoomList[roomName].roomCode !== roomCode) {
    //   socket.emit('joinResponse', {
    //     success: false,
    //     message: 'Incorrect room code'
    //   })
  } else if (userName === '') {
    socket.emit('joinResponse', {
      success: false,
      message: 'Username is required'
    })
  } else {
    let player = new Player(userName, roomName, socket)
    GameRoomList[roomName].players[socket.id] = player
    player.joinTeam()
    socket.emit('joinResponse', {
      success: true,
      message: 'A user has joined the room'
    })
    gameUpdate(roomName)
    logStats(
      socket.id +
        `( ${player.userName} ) JOINED  |  ` +
        GameRoomList[player.room].room +
        '  Players: ' +
        Object.keys(GameRoomList[player.room].players).length
    )
  }
}

const leaveRoom = socket => {
  const player = PlayerList[socket.id]
  if (!player) {
    return
  }
  delete PlayerList[player.id]
  delete GameRoomList[player.room].players[player.id]
  gameUpdate(player.room)
  logStats(
    socket.id +
      `( ${player.userName} ) LEFT  |  ` +
      GameRoomList[player.room].room +
      '  Players: ' +
      Object.keys(GameRoomList[player.room].players).length
  )

  if (Object.keys(GameRoomList[player.room].players).length < 1) {
    delete GameRoomList[player.room]
    logStats(`Deleted Room: ${player.room}`)
  }
  socket.emit('leaveResponse', {success: true})
}

const socketDisconnect = socket => {
  const player = PlayerList[socket.id]
  delete PlayerList[socket.id]
  delete SocketList[socket.id]

  if (player) {
    delete GameRoomList[player.room].players[socket.id]
    gameUpdate(player.room)
    logStats(
      socket.id +
        `( ${player.userName} ) DISCONNECTED  |  ` +
        GameRoomList[player.room].room +
        '  Players: ' +
        Object.keys(GameRoomList[player.room].players).length
    )
    if (Object.keys(GameRoomList[player.room].players).length < 1) {
      delete GameRoomList[player.room]
      logStats(`Deleted Room: ${player.room}`)
    }
  }
  logStats(`Disconnected:  ${socket.id}`)
}

const newGame = socket => {
  if (!PlayerList[socket.id]) {
    return
  }

  let room = PlayerList[socket.id].room

  GameRoomList[room].game.init()

  for (let player in GameRoomList[room].players) {
    PlayerList[player].role = 'guesser'
    SocketList[player].emit('chooseRoleResponse', {
      success: true,
      role: 'guesser'
    })
    SocketList[player].emit('newGameResponse', {success: true})
  }
  gameUpdate(room)
}

const chooseRole = (socket, data) => {
  if (!PlayerList[socket.id]) {
    return
  }
  let room = PlayerList[socket.id].room

  if (PlayerList[socket.id].team === undefined) {
    socket.emit('chooseRoleResponse', {success: false})
  } else {
    PlayerList[socket.id].role = data.role
    socket.emit('chooseRoleResponse', {success: true, role: data.role})
    gameUpdate(room)
  }
}

const clickedCard = (socket, data) => {
  if (!PlayerList[socket.id]) {
    return
  }
  let room = PlayerList[socket.id].room

  //check to see if it was that teams turn and  the game is still playing
  if (
    PlayerList[socket.id].team === GameRoomList[room].game.turn &&
    GameRoomList[room].game.isPlaying
  ) {
    if (PlayerList[socket.id].role !== 'spyMaster') {
      GameRoomList[room].game.flipTile(data.index)
      gameUpdate(room)
    }
  }
}

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
    socket.on('gameRoomList', () => {
      socket.emit('gameRoomList', GameRoomList)
    })

    socket.on('createRoom', data => {
      createRoom(socket, data)
    })

    //join room requires the same data as create room
    socket.on('joinRoom', data => {
      joinRoom(socket, data)
    })

    // Join Team
    // First make sure the player doesnt already exist ==> Add player to the player list-->
    // set players team value to data update the game room to reflect the new player
    // Data = players team selection
    socket.on('joinTeam', data => {
      if (!PlayerList[socket.id]) {
        return
      }
      let player = PlayerList[socket.id]
      player.team = data.team
      console.log('*****player: ', player)
      gameUpdate(player.room)
    })

    //Choose role
    socket.on('chooseRole', data => {
      chooseRole(socket, data)
    })
    //Create a new game
    socket.on('newGame', () => newGame(socket))

    //Spymaster submits a clue, and the clue is shown to all players
    socket.on('submitClue', data => {})

    // Clicked/Reveal card
    //Need to show which card has been selected
    //Result of clicking a card will depend on player.role. If player.role == Spymaster --> reveal card || guesser --> vote
    //Data = cardClicked (its index),
    socket.on('clickedCard', data => {
      clickedCard(socket, data)
    })

    //Submit Guess
    //Card with most votes is revealed --> if matches team color --> restart voting phase if revealed card !== team color --> nextTurn()
    // Data = card index with most votes
    socket.on('submitGuess', data => {
      submitGuess(socket, data)
    })

    // End Turn
    // need seperate end turn functionality as teams may voluntarily end their turn without guessing
    // need to get the Client's room and swith Room.Game.Turn
    // update room to reflect change
    socket.on('endTurn', () => {
      if (!PlayerList.socket.id) {
        return
      }
      const room = PlayerList[socket.id].room
      GameRoomList[room].game.nextTurn()
      gameUpdate(room)
    })

    //Clients need to be able to leave.  When client leaves the room we will remove them from the rooms player list
    socket.on('leaveRoom', () => {
      leaveRoom(socket)
    })

    //called when a client closes the browser or loses connection
    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
      socketDisconnect(socket)
    })
  })
}
