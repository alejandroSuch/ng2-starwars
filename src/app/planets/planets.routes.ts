import { Routes } from '@angular/router';
import { PlanetsComponent } from './planets.component';
import { PlanetComponent } from './planet/planet.component';

export const routes: Routes = [
  {path: '', component: PlanetsComponent},
  { path: ':id', component: PlanetComponent }
];
