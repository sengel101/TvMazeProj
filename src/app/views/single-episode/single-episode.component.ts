import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from '../../models/service.service';

// retrieves the episode for the previousepisode / nextepisode from the ShowDetailComponent View

@Component({
  selector: 'app-single-episode',
  templateUrl: './single-episode.component.html',
  styleUrls: ['./single-episode.component.sass']
})
export class SingleEpisodeComponent implements OnInit {
  episode: any;
  @Input() url: string;
  constructor(private service: ServiceService) {
  }
  ngOnInit() {
    this.service.getSingleEpisode(
      this.url
    ).subscribe(
      result => this.episode = result
    );

  }

}
