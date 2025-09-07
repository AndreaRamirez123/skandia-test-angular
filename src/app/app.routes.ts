import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { GoalSuccessComponent } from './features/goal-success/goal-success.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },               // Página inicial
  { path: 'goal-success', component: GoalSuccessComponent }, // Página de éxito
  { path: '**', redirectTo: '' }                        // Ruta desconocida redirige a Home
];
