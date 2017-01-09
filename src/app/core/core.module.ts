import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SwapiService } from './swapi.service';

@NgModule({
  declarations: [],
  imports     : [HttpModule],
  providers   : [SwapiService],
  // providers   : [],
  bootstrap   : []
})
export class CoreModule {
  /*static forRoot (): ModuleWithProviders {
    return {
      ngModule : CoreModule,
      providers: [SwapiService]
    }
  }

  static forChild (): ModuleWithProviders {
    return {
      ngModule : CoreModule
    }
  }*/
}
