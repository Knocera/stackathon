const UUID = require('node-uuid')
const GameEngine = require('./gameEngine')

class GameServer {
  constructor() {
    this.games = {}
    this.gameCount = 0
    this.createGame = this.createGame.bind(this)
  }

  GameRoom(player) {
    let newGame = {
      id: UUID(),
      host: player.username,
      gameCode: 1234,
      players: [player.username],
      playerCount: 1,
      isPlaying: false
    }
    player.isHost = true
    // player.game = newGame


    newGame.gameEngine = new GameEngine(newGame)
    this.games[newGame.id] = newGame
    this.gameCount++
  }

  endGame(gameId, userId) {
    const selectedGame = this.games[gameId]
    const gameHostId = selectedGame.hostId

    //Need to stop the game   Maybe close the socket
    //Need to decide on who can stop the game - maybe only the host?

    if (selectedGame.playerCount > 0) {
      if (!userId === gameHostId) {
        return 'Only the Game Room host can end the game'
      }
      if (userId === gameHostId) {
        selectedGame.host.isHost = false
        selectedGame.isPlaying = false
        selectedGame.gameEngine.endGame()
        delete this.games[gameId]
        this.gameCount--
        return 'The host has ended the game'
      }
      if (!selectedGame.players.indexOf(gameHostId)) {
        selectedGame.isPlaying = false
        selectedGame.gameEngine.endGame()
        delete this.games[gameId]
        this.gameCount--
        return 'The host has left the game'
      }
    } else {
      delete this.games[gameId]
      this.gameCount--
      return 'Empty room - the game room has closed'
    }
    return 'Uhhh not sure what happened here'
  }

  joinGame(player, roomCode){

    const targetRoom = this.games[roomCode]

    if (!this.gameCount){
      console.log("No games right now - Try creating a game instead")
      return
    }
    if (targetRoom){
      targetRoom.players.push(player)
      targetRoom.players++
      return "Joining room"
    } else {
      return "Incorrect room code"
    }
  }

}



module.exports = {
  GameServer,
  UUID
}
