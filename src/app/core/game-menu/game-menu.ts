import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GAME_STEPS, GameStep } from '../game-flow';

@Component({
  selector: 'app-game-menu',
  imports: [],
  templateUrl: './game-menu.html',
  styleUrl: './game-menu.css',
})
export class GameMenu {


  steps: GameStep[] = GAME_STEPS
  @Input() currentRoute = ''

}
