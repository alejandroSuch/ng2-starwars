import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetCardComponent } from './planets/planet-card/planet-card.component';
import { routes } from './app.routes';
import { PlanetsModule } from './planets/planets.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CoreModule.forRoot(),
    PlanetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
