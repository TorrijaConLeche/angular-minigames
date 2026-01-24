import { Routes } from '@angular/router';

import { Intro, Intro2 } from "./pages"

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' }, // ruta por defecto
  { path: 'intro', component: Intro },
  { path: 'intro2', component: Intro2 },
  { path: '**', redirectTo: 'intro' } // fallback si no coincide
];