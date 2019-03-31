import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../models/service.service';
import { HttpClient} from '@angular/common/http';

// Load the <shows> array by calling service.getShows() passing the <query> named param of the Active Route

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
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



}
