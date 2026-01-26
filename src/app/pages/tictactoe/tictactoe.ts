import { Component, Inject } from '@angular/core';
import { GameMenu } from '../../core/game-menu/game-menu';
import { GameNavigationService } from '../../core/game-navigation-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tictactoe',
  imports: [GameMenu, NgClass],
  templateUrl: './tictactoe.html',
  styleUrl: './tictactoe.css',
})




export class Tictactoe {

  currentRoute = ''
  board: Cell[] = new Array(9);

  currentTurn: 'X' | 'O' = 'X'

  constructor(private navigation: GameNavigationService){
    this.initializeBoard()
    this.currentRoute = this.navigation.getCurrentRoute()

  }

  initializeBoard(){
    for (let idx = 0; idx < this.board.length; idx++) {
      this.board[idx] = new Cell(idx, "");
    }
  }

  play(v: number){

    this.board.forEach(idx => {
      if (idx.id == v) {
        idx.value = this.currentTurn
      }
    });

    // checkWinner()

    this.currentTurn = this.currentTurn === 'X' ? 'O' : 'X'


  }

  checkWinner(){
    // TODO
  }
  
}

class Cell {
  id: number
  value: string
  constructor(id: number, value: string){

    this.id = id
    this.value = value
  }


  setValue(newValue: string){
    this.value = newValue
  }

}
