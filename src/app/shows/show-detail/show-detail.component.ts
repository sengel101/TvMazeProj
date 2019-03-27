import {Component, Input, OnInit} from '@angular/core';
import { Show } from '../show.model';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.sass']
})
export class ShowDetailComponent implements OnInit {

  @Input() passedShow: Show;
  constructor() { }

  ngOnInit() {
  }

}
