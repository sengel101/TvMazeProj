import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../models/service.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  seasons: any;
  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) {
    this.service.getSeasons(
      this.route.snapshot.paramMap.get('id')
    ).subscribe(
      result => this.seasons = result
    );
  }
  ngOnInit() {

  }

  goToEpisodes(show) {
    this.router.navigate(['episodes', show.show.id]);
  }
}

