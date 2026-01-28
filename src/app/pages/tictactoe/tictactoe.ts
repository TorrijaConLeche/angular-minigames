import { Component, Inject } from '@angular/core';
import { GameMenu } from '../../core/game-menu/game-menu';
import { GameNavigationService } from '../../core/game-navigation-service';

@Component({
  selector: 'app-tictactoe',
  imports: [GameMenu],
  templateUrl: './tictactoe.html',
  styleUrl: './tictactoe.css',
})




export class Tictactoe {

  currentRoute = ''
  board: Cell[] = new Array(9);

  currentTurn: 'X' | 'O' = 'X'
  winner: 'X' | 'O' | 'draw' | null = null 

  constructor(private navigation: GameNavigationService){
    this.initializeBoard()
    this.currentRoute = this.navigation.getCurrentRoute()

  }

  initializeBoard(){
    for (let idx = 0; idx < this.board.length; idx++) {
      this.board[idx] = new Cell(idx);
    }
  }

  play(v: number){

    this.board.forEach(idx => {
      if (idx.id == v) {
        idx.value = this.currentTurn
      }
    });

    let winner = this.checkWinner()

    if(winner != null){
      this.winner = winner
      console.log(winner)
      
    } else {

      if (this.checkDraw()){
        this.winner = 'draw'
        return
      }

      this.currentTurn = this.currentTurn === 'X' ? 'O' : 'X'
    }

  }

  checkDraw(){
    let isDraw = true
    this.board.forEach(cell => {
      if(cell.value == ""){
        isDraw = false
      }
    });

    return isDraw
  }

  checkWinner(): 'X' | 'O' | null {

    let res = null

    let combinations = [[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6],[1,4,7],[2,5,8]]
    
    combinations.forEach(i => {

      let c0 = this.board[i[0]].value
      let c1 = this.board[i[1]].value
      let c2 = this.board[i[2]].value


      if(c1 != "" && c1==c0 && c1 == c2){
        res = this.currentTurn
      }
    });

    return res

  }

  
}

class Cell {
  id: number
  value: string 
  constructor(id: number){

    this.id = id
    this.value = ""
  }


  setValue(newValue: string){
    this.value = newValue
  }

}
