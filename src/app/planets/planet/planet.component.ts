import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../core/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector   : 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls  : ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  private planet: any      = {};
  private loadingResidents = false;
  private residents        = null;
  private loadingMovies    = false;
  private movies           = null;

  constructor (private swapiService: SwapiService, private route: ActivatedRoute) {
  }

  ngOnInit () {
    this.route
        .params
        .flatMap(({ id }) => this.swapiService.getPlanet(+id))
        .subscribe((planet: any) => {
          this.planet = planet;

          this.getResidents();
          this.getMovies();
        });
  }

  private getMovies () {
    this.loadingMovies = true;
    const filmObservables = [];

    this.planet
        .films
        .forEach((film: any) => {
          const id = this.swapiService.getIdFromUrl(film);
          filmObservables.push(this.swapiService.getFilm(id));
        });

    Observable.combineLatest
              .apply(null, filmObservables)
              .subscribe((movies) => {
                this.movies = null;
                if (movies && movies.length > 0) {
                  this.movies = movies;
                }
                this.loadingMovies = false;
              });
  }

  private getResidents () {
    this.loadingResidents = true;
    const residentObservables = [];

    this.planet
        .residents
        .forEach((resident: any) => {
          const id = this.swapiService.getIdFromUrl(resident);
          residentObservables.push(this.swapiService.getPerson(id));
        });

    Observable.combineLatest
              .apply(null, residentObservables)
              .subscribe((residents) => {
                this.residents = null;
                if (residents && residents.length > 0) {
                  this.residents = residents;
                }
                this.loadingResidents = false;
              });
  }

}
