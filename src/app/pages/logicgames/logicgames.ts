import { Component, inject, Injector } from '@angular/core';
import { GameMenu } from "../../core/game-menu/game-menu";
import { GameNavigationService } from '../../core/game-navigation-service';
import { NgComponentOutlet } from '@angular/common';

import { LogicgamesEcuacion, LogicgamesNumeros } from './logic-index';
import { Type } from '@angular/core';
import { LogicGameService } from './logicgames-comunication-service';

@Component({
  selector: 'app-logicgames',
  imports: [GameMenu, NgComponentOutlet],
  templateUrl: './logicgames.html',
  styleUrl: './logicgames.css',
})

export class Logicgames {

  currentLogicGame = 0
  currentRoute = ''

  public myInjector = inject(Injector);
  private gameService = inject(LogicGameService);

  constructor(private navigation: GameNavigationService){
    this.currentRoute = this.navigation.getCurrentRoute()
    this.gameService.onGameCompleted.subscribe(() => {
      this.goNext()
    })
  }

  games: Acertijo[] = [
    new Acertijo(LogicgamesEcuacion),
    new Acertijo(LogicgamesNumeros)
  ];
  
  goNext(){
    this.games[this.currentLogicGame].setCompleted(true)
    this.currentLogicGame++
  }

}

class Acertijo {
  comp: Type<any>; 
  completed: boolean = false;

  constructor(componente: Type<any>) {
    this.comp = componente;
  }

  setCompleted(v: boolean) {
    this.completed = v;
  }
}


