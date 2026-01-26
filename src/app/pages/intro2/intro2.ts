import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { GameMenu } from '../../core/game-menu/game-menu';

@Component({
  selector: 'app-intro2',
  imports: [GameMenu],
  templateUrl: './intro2.html',
  styleUrl: './intro2.css',
})
export class Intro2 {

  currentRoute = ''
  progress = signal(0)

  // Necessary to clear setInterval 
  private destroyRef = inject(DestroyRef);


  constructor(private router: Router){

    this.currentRoute = this.router.url
    const intervalId = setInterval(() => {
      if (this.progress() < 100) {
        this.progress.update(v => v - (Math.min(1, v/10)));
      }
    }, 100);

      this.destroyRef.onDestroy(() => {
    clearInterval(intervalId);
    });
  }

  
  fill() {
    if (this.progress() < 100) {
      this.progress.update(value => value + 5);
    }
  }


}
