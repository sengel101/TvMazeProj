import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from '../../models/service.service';
import {ActivatedRoute, Router} from '@angular/router';

// Load the <episodes> array by calling service.getEpisodes() by passing the saeson <id> from the Parent using ng-Model

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass']
})
export class EpisodesComponent implements OnInit {
  episodes: any;
  @Input()id: number;
  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
      console.log(this.id);
      this.service.getEpisodes(
        this.id
      ).subscribe(
        result => this.episodes = result
      );
  }

  goToEpisodes(show) {
    this.router.navigate(['episodes', show.show.id]);
  }
}
