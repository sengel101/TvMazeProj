import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../models/service.service';
import { HttpClient} from '@angular/common/http';
import {Seasons} from '../../models/Seasons';

// Loads the <seasons> array by calling service.getSeasons() passing the show <id> named param of the Active Route
// Creates the seasons array of Class Type Seasons

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  id: string;
  seasons: Seasons[];
  constructor(private service: ServiceService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getSeasons(this.id).subscribe(
      res => {
        this.seasons = [];
        res.map((item) => {
          this.seasons.push(new Seasons(item));
        });
      }
    );
  }

  ngOnInit() {

  }

}

