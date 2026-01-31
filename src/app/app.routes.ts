import { Routes } from '@angular/router';

import { Intro, Intro2, Tictactoe, Logicgames} from "./pages"

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' }, // ruta por defecto
  { path: 'intro', component: Intro },
  { path: 'intro2', component: Intro2 },
  { path: 'tictactoe', component: Tictactoe },
  { path: 'logic-games', component: Logicgames },
  { path: '**', redirectTo: 'intro' } // fallback si no coincide
];