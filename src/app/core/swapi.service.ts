import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const BASE_URL    = 'http://swapi.co/api/';
const PEOPLE_URL  = `${BASE_URL}people/`;
const PLANETS_URL = `${BASE_URL}planets/`;
const FILMS_URL   = `${BASE_URL}films/`;

@Injectable()
export class SwapiService {

  constructor (private http: Http) {
  }

  getPeople (page: number = 1): Promise<any> {
    return this.list(PEOPLE_URL, page);
  }

  getPlanets (page: number = 1): Promise<any> {
    return this.list(PLANETS_URL, page);
  }

  getPlanet (id: number): Promise<any> {
    return this.one(`${PLANETS_URL}${id}/`);
  }

  getPerson (id: number): Promise<any> {
    return this.one(`${PEOPLE_URL}${id}/`);
  }

  getFilm (id: number): Promise<any> {
    return this.one(`${FILMS_URL}${id}/`);
  }

  one (url: string) {
    return this
      .http
      .get(url)
      .toPromise()
      .then((res: Response) => {
        const result = res.json();

        result.id = this.getIdFromUrl(result.url);

        return result;
      });
  }

  private list (url: string, page: number) {
    return this
      .http
      .get(url, this.createPaginationRequestOptions(page))
      .toPromise()
      .then((res: Response) => this.extractListData(res, page));
  }

  private createPaginationRequestOptions (page: number): RequestOptions {
    const searchParams: URLSearchParams = new URLSearchParams();
    searchParams.set('page', `${page}`);

    return <RequestOptions>{
      search: searchParams
    };
  }

  private extractListData (res: Response, page: number) {
    const result = res.json();

    result.page  = page;
    result.pages = Math.ceil(result.count / 10);

    result.results.forEach((it) => {
      it.id = this.getIdFromUrl(it.url);
    });

    return result;
  }

  public getIdFromUrl (url: string) {
    return +url.split("/").reverse().reduce((prev, cur) => prev ? prev : cur, null);
  }

}
