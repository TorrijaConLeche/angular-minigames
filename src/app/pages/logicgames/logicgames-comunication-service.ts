import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LogicGameService {
  // Evento que los hijos dispararán
  public onGameCompleted = new EventEmitter<void>();
  
}