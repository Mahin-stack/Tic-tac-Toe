import Game from './Game.js'
import GameView from './GameView.js'

//initialised the game
let game = new Game();
let gameView = new GameView();

document.querySelector(".restart")
.addEventListener("click", ()=>{
    onRestartGame();
})
let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", ()=> {
        onTileClick(tile.dataset.index)
    })
})

function onTileClick(i){
    game.makeMove(i);
    gameView.updateBoard(game);
}

function onRestartGame(){
    game = new Game();
    gameView.updateBoard(game)
}
gameView.updateBoard(game);