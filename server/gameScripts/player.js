

let PlayerList = {}
let PlayerCount = 0

class Player {
  constructor(username, room, socket, team, role){
    this.id = socket.id
    this.username = username
    this.room = room
    this.team = team
    this.role = role

    PlayerCount = PlayerCount + 1
    PlayerList[this.id] = this
  }
}

module.exports = Player
