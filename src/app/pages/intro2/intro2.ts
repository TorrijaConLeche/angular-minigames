import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GAME_STEPS } from '../../core/game-flow';

import { GameMenu } from '../../core/game-menu/game-menu';

@Component({
  selector: 'app-intro2',
  imports: [GameMenu],
  templateUrl: './intro2.html',
  styleUrl: './intro2.css',
})
export class Intro2 {

  currentRoute = ''

  constructor(private router: Router){
    this.currentRoute = this.router.url
  }


}
