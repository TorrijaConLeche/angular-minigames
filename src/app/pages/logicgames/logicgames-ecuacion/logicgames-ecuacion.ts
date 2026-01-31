import { Component, inject } from '@angular/core';
import { LogicGameService } from '../logicgames-comunication-service';

@Component({
  selector: 'app-logicgames-ecuacion',
  imports: [],
  templateUrl: './logicgames-ecuacion.html',
  styleUrl: './logicgames-ecuacion.css',
})
export class LogicgamesEcuacion {

  status:  "completed" | "wrong" | null = null
  private gameService = inject(LogicGameService);

  comprobarInput(valor: string){

    if(valor == "-1"){ // Correct
      this.status = "completed"
      this.gameService.onGameCompleted.emit()
    } else {
      this.status = "wrong"
    }
  }

}
