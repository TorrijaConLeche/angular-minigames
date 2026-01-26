import { Injectable } from '@angular/core';
import { GAME_STEPS, GameStep } from './game-flow';
@Injectable({
  providedIn: 'root',
})
export class GameFlowService {
  private games: GameStep[] = GAME_STEPS


  getNextStepRoute(currentStep: string): string{

    // If exists, then return next step route
    for(let i = 0; i<this.games.length; i++){
      if(this.games[i].route === currentStep){
        return this.games[i+1].route;
      }
    }
    return this.games[0].route;
  }


  setCompleted(currentStep: string) : void{

    for(let i = 0; i<this.games.length; i++){
      if(this.games[i].route === currentStep){
        this.games[i].completed = true;
      }
    }
  }

  printSteps(){
    this.games.forEach(game => {
      console.log(game.route + " : " + game.completed)
    });

    }
  }