import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {




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
}

