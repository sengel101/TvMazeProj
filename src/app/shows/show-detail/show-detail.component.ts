import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../models/service.service';
import { Show } from '../show.model';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.sass']
})
export class ShowDetailComponent implements OnInit {
  shows: any;
  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) {

    this.service.getShows(
      this.route.snapshot.paramMap.get('query')
    ).subscribe(
      result => this.shows = result
    );
  }

  ngOnInit() {

  }

  goToEpisodes(show) {
    this.router.navigate(['episodes', show.show.id]);
  }
}
