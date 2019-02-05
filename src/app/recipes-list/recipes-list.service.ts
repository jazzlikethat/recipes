import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class RecipesService {
  recipesURL = 'https://api.edamam.com/search';  // URL to web api

  constructor(
    private http: HttpClient
    ) {
    
  }

  /* GET recipes whose ingredients contains search term */
  searchRecipes(term: string): Observable<[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = {
        params: new HttpParams().set('q', term)
                                .set('app_id', '50f7cf31')
                                .set('app_key', 'e4019027cfe77cec1d9ef206cf815c9f')
    };

    return this.http.get<[]>(this.recipesURL, options);
  }


}

