

class Player{
  consturctor(username, room, socket){
    this.id = socket.id
    this.username = username
    this.room = room
    this.team = undefined
    this.role = undefined

    PlayerList[this.id] = this
    PlayerCount++
    }
}

module.exports = Player
