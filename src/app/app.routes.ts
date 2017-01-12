import { Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';

export const routes: Routes = [
  {
    path    : 'planets',
    children: [
      { path: '', component: PlanetsComponent }
    ]
  }
];
