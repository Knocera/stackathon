
let GameRoomList = {players: {}}
let PlayerList = {}
let PlayerCount = 0

class Player {
  constructor(username, room = {}, socket){
    this.id = socket.id
    this.username = username
    this.room = room
    this.team = undefined
    this.role = 'guesser'

    PlayerCount = PlayerCount + 1
    PlayerList[this.id] = this
  }
  joinTeam(){
    let numInRoom = 0
    if (Object.keys(GameRoomList[this.room].players).length){
      numInRoom = Object.keys(GameRoomList[this.room].players).length

    }
    if (numInRoom % 2 === 0) this.team = 'blue'
    else this.team = 'red'
  }
}

module.exports = Player
