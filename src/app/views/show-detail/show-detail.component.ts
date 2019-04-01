import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../models/service.service';
import { HttpClient} from '@angular/common/http';
import { Show } from '../../models/Show';
import {Episodes} from '../../models/Episodes';

// Load the <shows> array by calling service.getShows() passing the <query> named param of the Active Route
// Creates the shows array of Class Type Show

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  search: string;
  shows: Show[];
  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) {

    this.route.paramMap.subscribe((params) => {
      this.search = params.get('query');
      this.service.getShows(this.search).subscribe(
      res => {
        this.shows = [];
        res.map((item) => {
          this.shows.push(new Show(item.show));
        });
        }
    );
  });
}

  ngOnInit() {}



}

