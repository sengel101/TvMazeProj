import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


// API Calls for the : (1) Shows By SearchName   (2) Seasons By ShowId  (3) Episodes By Show Season  (4) Single Episode

  baseURL = 'http://api.tvmaze.com/';
  constructor(private http: HttpClient) { }

  getShows(query): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL + 'search/shows?q=' + query);
  }
  getSeasons(id): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL + 'shows/' + id + '/seasons');
  }
  getEpisodes(id): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL + 'seasons/' + id + '/episodes');
  }
  getSingleEpisode(url): Observable<any[]> {
    return this.http.get<any[]>(url);
  }
}

