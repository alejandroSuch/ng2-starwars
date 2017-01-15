import { NgModule } from '@angular/core';
import { PlanetsComponent } from './planets.component';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { routes } from './planets.routes';
import { CommonModule } from '@angular/common';
import { PopulationPipe } from './population.pipe';
import { PlanetComponent } from './planet/planet.component';

@NgModule({
  declarations: [PlanetsComponent, PlanetCardComponent, PopulationPipe, PlanetComponent],
  imports     : [CoreModule.forChild(), RouterModule.forChild(routes), CommonModule],
  providers   : []
})
export class PlanetsModule {
}
