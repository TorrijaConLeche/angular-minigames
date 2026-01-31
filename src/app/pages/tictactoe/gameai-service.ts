import { Injectable, Input } from '@angular/core';
import {Cell} from "./tictactoe"

@Injectable({
  providedIn: 'root',
})
export class GameaiService {



  getAIMove(board: Cell[], diff: number){
    // Small chance to do a random movement so player can win
      if (Math.random()*100 < diff){ // adjust Difficult
          return this.getBestMove(board)
      } else {
          return this.getRandomMove(board) 
      }
  }

  getBestMove(board: Cell[]) {

    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < board.length; i++) {
      let value = board[i].value

      // If we can make the move 
      if(value == ""){

        // Simulate play
        board[i].value = 'O'

        // Evaluate action
        let score = this.minimax(board, false)

        // Undone action
        board[i].value = ""

        if(score > bestScore){
          bestScore = score
          move = i
        }
      }
    }

    return move
  }

  getRandomMove(board: Cell[]){


    let randomMove = (Math.round(Math.random()*100))%8 
    console.log("MOVE: RANDOM " + randomMove)
    while (board[randomMove].value != ""){
      
      randomMove = (Math.round(Math.random()*100))%8 
      console.log("MOVE: RANDOM " + randomMove)

    }

    return randomMove

  }



  minimax(board: Cell[], isMax: boolean):number{

    let winner = this.checkWinner(board)
    // If its terminal (game finished) we stop
    if(winner !== null) {

      if (winner == 'O') return 1;
      if (winner == 'X') return -1;
      return 0;

    }
    
    if(isMax) return this.max(board)
    else return this.min(board)

  }

  max(board: Cell[]):number{

    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {

      if(board[i].value == ""){ // If we can play in this cell -> we play it 

        board[i].value = 'O'

        const score = this.minimax(board, false)

        // Undo movements
        board[i].value = ""

        bestScore = Math.max(score, bestScore)

      }
    }
    return bestScore
  }

  min(board: Cell[]):number{
    let bestScore = Infinity;

    for(let i = 0; i<board.length; i++){
      if(board[i].value == ""){

        // Move
        board[i].value = 'X'

        // Evaluate
        const score = this.minimax(board, true)

        // Undo move
        board[i].value = ""

        bestScore = Math.min(score, bestScore)
      }
    }
    return bestScore
  }


  checkWinner(board: Cell[]): string | null{
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for (const [a,b,c] of lines) {
      if (board[a].value && board[a].value === board[b].value && board[a].value === board[c].value) {
        return board[a].value;
      }
    }

    if(this.checkDraw(board)){
      return 'draw'
    } else {
      return null
    }
  
  }


  checkDraw(board: Cell[]): boolean {

    let isFull = true;
    for (let i = 0; i < board.length; i++) {
      if (board[i].value === "") {
        isFull = false; // Hay al menos una celda vacía
        break;
      }
    }
    return isFull;
  }


}
