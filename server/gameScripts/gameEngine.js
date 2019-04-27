const words = require('./assets/defaultWords')


class Game{
  constructor(){
    this.words = words

    this.init()
    this.red = this.findType('red')
    this.blue = this.findType('blue')

  }
  init(){
    let  turn   =  "blue"
    if (this.findType('red') > this.findType('blue')) turn =  'red'
    this.turn  =  turn
    this.isPlaying = true
    this.winner = null
    this.board  =  this.newBoard()
  }
  checkWin(){
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
  flipCard(x){
    let card = this.board[x]
    if (!card.flipped){
      let type = card.type
      card.flipped=true

      if (type === 'death') {
        this.isPlaying = false
        if (this.turn === 'blue'){
           this.winner = 'red'
        }else{
          this.winner = 'blue'
        }

      }
      else if (type === 'neutral') this.nextTurn()
      else if (type !== this.turn) this.nextTurn()
      this.checkWin()
    }
  }

  findType(type){
    let counter = 0
    this.board.forEach(index=>{
      if (index.type === type && !index.flipped) counter++
    })
    return counter

  }
  nextTurn(){
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
          isRed: false,
          isBlue: false,
          isAssassin: false,
          isNeutral: true,
          isRevealed: false
      }
    }
  }
  game = game.reduce(function(prev, curr) {
  return prev.concat(curr);
});
  game[24].isAssassin = true
  game[24].isNeutral= false
  for (let i = 1; i < 8; i++){
    game[i].isBlue= true
    game[i].isNeutral= false
    game[i + 10].isRed = true
    game[i+10].isNeutral= false
  }
  if ((Math.floor(Math.random * 20) % 2) === 0){
    game[0].isBlue = true;

  }else{
    game[0].isRed = true
  }

  return game
}
shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
  return array
}

newBoard(){
  this.board =  this.shuffle(this.initializeBoard())
  let foundWord  = null
  let usedWords = []

  for(let i = 0;  i < this.board.length - 1;  i++){
    foundWord = this.words[Math.floor(Math.random() * this.words.length)]
    while (usedWords.includes(foundWord)){
      foundWord = this.words[Math.floor(Math.random() * this.words.length)]
    }
    usedWords.push(foundWord)
    this.board[i].word = foundWord
  }
  this.red = this.findType('red')
  this.blue= this.findType('blue')
}



}
module.exports = Game
