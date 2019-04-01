import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from '../../models/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Episodes} from '../../models/Episodes';

// Loads the <episodes> array by calling service.getEpisodes() by passing the saeson <id> from the Parent using ng-Model
// Creates the episodes array of Class Type Episodes

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes: Episodes[];
  @Input()id: number;
  constructor(private service: ServiceService, private route: ActivatedRoute) {
  }
  ngOnInit() {
      this.service.getEpisodes(this.id).subscribe(
        res => {
          this.episodes = [];
          res.map((item) => {
            this.episodes.push(new Episodes(item));
          });
        }
      );
  }


}
