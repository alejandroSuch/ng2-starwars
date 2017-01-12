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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PlanetsComponent,
    PlanetCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
