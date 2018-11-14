import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AQ_form } from '../AQ_form';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'AAAAPrdHM64:APA91bG0S3pgFpMkHVQUipFUTk8BKBQQOc4S-NJAtdaZg5Id1WbmP-OYkeRYh3TmqFUUie9t7dWZLVxx-QtVjnQqceR3ilQ9kBFmsIErIyEKQOZWZbkxX3rGvwBHe13ECkEMQYf85W_K'
  })
};

@Injectable()
export class HeroesService {
  heroesUrl = 'http://202.160.1.102:8084/api/aq';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** GET heroes from the server */
  getReading() : Observable<AQ_form[]> {
    return this.http.get<AQ_form[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<Hero[]> {
  //   term = term.trim();

  //   // Add safe, URL encoded search parameter if there is a search term
  //   const options = term ?
  //    { params: new HttpParams().set('name', term) } : {};

  //   return this.http.get<Hero[]>(this.heroesUrl, options)
  //     .pipe(
  //       catchError(this.handleError<Hero[]>('searchHeroes', []))
  //     );
  // }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addreading (hero: AQ_form): Observable<AQ_form> {
    return this.http.post<AQ_form>(this.heroesUrl, hero, httpOptions)
      .pipe(
        catchError(this.handleError('addreading', hero))
      );
  }

  /** DELETE: delete the hero from the server */
  // deleteHero (id: number): Observable<{}> {
  //   const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
  //   return this.http.delete(url, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('deleteHero'))
  //     );
  // }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
//   updateHero (hero: Hero): Observable<Hero> {
//     httpOptions.headers =
//       httpOptions.headers.set('Authorization', 'my-new-auth-token');

//     return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
//       .pipe(
//         catchError(this.handleError('updateHero', hero))
//       );
//   }
// }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
}
