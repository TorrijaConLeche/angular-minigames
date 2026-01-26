import { Component, DestroyRef, inject, signal } from '@angular/core';
import { GameMenu } from '../../core/game-menu/game-menu';
import { GameNavigationService } from '../../core/game-navigation-service';

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

  constructor(private navigation: GameNavigationService){

    this.currentRoute = this.navigation.getCurrentRoute()

    const intervalId = setInterval(() => {
      if(this.progress() == 100){
        this.navigation.goToNextPage();
      } 
      else if (this.progress() < 100) {
        this.progress.update(v => v - (Math.min(1, v/10)));
      }
    }, 100);

    this.destroyRef.onDestroy(() => {
      clearInterval(intervalId);
    });
  }

  // In order to fill the button 
  fill() {
    if (this.progress() < 100) {
      this.progress.update(value => Math.min(100, value + 5));
    }
  }


}
