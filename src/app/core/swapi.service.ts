import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Response } from "@angular/http";

import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://swapi.co/api/';
const PEOPLE_URL = `${BASE_URL}people/`;
const PLANETS_URL = `${BASE_URL}planets/`;

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

  private list (url: string, page: number) {
    return this
    .http
    .get(url, this.createPaginationRequestOptions(page))
    .toPromise()
    .then((res: Response) => this.extractListData(res, page));
  }

  private createPaginationRequestOptions (page: number): RequestOptions  {
    const searchParams: URLSearchParams = new URLSearchParams();
    searchParams.set('page', `${page}`);

    return <RequestOptions>{
      search: searchParams
    };
  }

  private extractListData (res: Response, page: number) {
    const result = res.json();

    result.page = page;
    result.pages = Math.ceil(result.count / 10);

    return result;
  }

}
