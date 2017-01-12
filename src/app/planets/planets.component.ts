import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../core/swapi.service';

@Component({
  selector   : 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls  : ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  private planets: any[] = [];
  private currentPage: number = 1;
  private totalPages: number = 1;

  constructor (private swapiService: SwapiService) {
  }

  ngOnInit () {
    this.goToPage(this.currentPage);
  }

  goToPage(pageNumber) {
    this.swapiService
        .getPlanets(pageNumber)
        .then(({ results, page, pages }) => {
          this.planets = results;
          this.currentPage = page;
          this.totalPages = pages;
        });
  }

}
