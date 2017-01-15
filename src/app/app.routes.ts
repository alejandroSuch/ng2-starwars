import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'planets' },
  { path: 'planets', loadChildren: './planets/planets.module#PlanetsModule' },
  { path: '**', component: NotFoundComponent },
];
