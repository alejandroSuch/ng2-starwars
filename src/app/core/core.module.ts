import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SwapiService } from './swapi.service';
import { PaginatorComponent } from './paginator/paginator.component';
import { CommonModule } from '@angular/common';
import {PageItemComponent} from "./paginator/page-item/page-item.component";

@NgModule({
  declarations: [PaginatorComponent, PageItemComponent],
  imports     : [HttpModule, CommonModule],
  exports     : [PaginatorComponent]
})
export class CoreModule {
  static forRoot (): ModuleWithProviders {
    return {
      ngModule : CoreModule,
      providers: [SwapiService]
    }
  }

  static forChild (): ModuleWithProviders {
    return {
      ngModule: CoreModule
    }
  }
}
