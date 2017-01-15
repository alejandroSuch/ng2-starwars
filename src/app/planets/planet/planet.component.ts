import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../core/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector   : 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls  : ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  private planet: any = {};
  private residents   = null;
  private movies      = null;

  constructor (private swapiService: SwapiService, private route: ActivatedRoute) {
  }

  ngOnInit () {
    this
      .route
      .params
      .subscribe((params: any) => {
        this
          .swapiService
          .getPlanet(+params.id)
          .then((planet) => {
            this.planet = planet;

            this.getResidents();
            this.getMovies();
          });
      });
  }

  private getMovies () {
    const filmPromises = [];

    this.planet.films.forEach((film: any) => {
      const id = this.swapiService.getIdFromUrl(film);
      filmPromises.push(this.swapiService.getFilm(id));
    });

    Promise.all(filmPromises).then((movies) => {
      this.movies = null;
      if (movies && movies.length > 0) {
        this.movies = movies;
      }
    });
  }

  private getResidents () {
    const residentPromises = [];

    this.planet.residents.forEach((resident: any) => {
      const id = this.swapiService.getIdFromUrl(resident);
      residentPromises.push(this.swapiService.getPerson(id));
    });

    Promise.all(residentPromises).then((residents) => {
      this.residents = null;
      if (residents && residents.length > 0) {
        this.residents = residents;
      }
    });
  }

}
