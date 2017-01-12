import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwapiService } from '../core/swapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector   : 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls  : ['./planets.component.css']
})
export class PlanetsComponent implements OnInit, OnDestroy {
  private planets: any[] = [];
  private currentPage: number = -1;
  private totalPages: number = -1;
  private subscription: Subscription;
  private loading: boolean = false;

  constructor (private swapiService: SwapiService,
               private router: Router,
               private route: ActivatedRoute) {
  }

  ngOnInit () {
    this.subscription = this.route
                            .queryParams
                            .subscribe(({ page }) => this.goToPage(+page || 1));
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  onPaginate (page) {
    const commands = ['./'];
    const extras = { relativeTo: this.route, queryParams: { page } };

    this.router.navigate(commands, extras);
  }

  goToPage (page) {
    if (page === this.currentPage) {
      return;
    }

    this.loading = true;

    this.swapiService
        .getPlanets(page)
        .then(({ results, page, pages }) => {
          this.planets = results;
          this.currentPage = page;
          this.totalPages = pages;
          this.loading = false;
        });
  }

}
