import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SwapiService } from './swapi.service';
import { PaginatorComponent } from './paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { PageItemComponent } from './paginator/page-item/page-item.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { HoveredDirective } from './hovered.directive';

@NgModule({
  declarations: [PaginatorComponent, PageItemComponent, PreloaderComponent, HoveredDirective],
  imports     : [HttpModule, CommonModule],
  exports     : [PaginatorComponent, PreloaderComponent, HoveredDirective]
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
