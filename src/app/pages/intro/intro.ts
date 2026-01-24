import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {

  isExiting = false;

  constructor(private router: Router) {}

  startsExit(){
    this.isExiting = true;

      setTimeout(() => {
      this.router.navigate(['intro2']);
    }, 800);

  }

}
