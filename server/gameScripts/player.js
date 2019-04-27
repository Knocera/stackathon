

class Player{
  consturctor(username, room, socket, team, role){
    this.id = socket.id
    this.username = username
    this.room = room
    this.team = team
    this.role = role

    PlayerList[this.id] = this
    PlayerCount++
    }
}

module.exports = Player
