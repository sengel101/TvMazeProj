import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


// API Calls for the : (1) Shows By SearchName   (2) Seasons By ShowId  (3) Episodes By Show Season  (4) Single Episode

  constructor(private http: HttpClient) { }

  getShows(u) {
    return this.http.get('http://api.tvmaze.com/search/shows?q=' + u);
  }
  getSeasons(u) {
    return this.http.get('http://api.tvmaze.com/shows/' + u + '/seasons');
  }
  getEpisodes(u) {
    return this.http.get('http://api.tvmaze.com/seasons/' + u + '/episodes');
  }
  getSingleEpisode(url) {
    return this.http.get(url);
  }
}

