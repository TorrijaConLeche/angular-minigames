import { Injectable } from '@angular/core';
import { GameFlowService } from './game-flow-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GameNavigationService {
  
  

  constructor(
    private router: Router,
    private gameFlowService: GameFlowService
  ){}

  // Intro2 completed so we go to the first game
  goToNextPage(){
    this.gameFlowService.setCompleted(this.router.url)
    let nextRoute = this.gameFlowService.getNextStepRoute(this.router.url)
    
    this.router.navigate([nextRoute])

  }

  getCurrentRoute(){
    return this.router.url
  }

}
