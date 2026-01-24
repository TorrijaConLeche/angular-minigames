import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Intro } from './pages/intro/intro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('minijuegos-angular');
}
