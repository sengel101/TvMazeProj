import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../models/service.service';
import {Router} from '@angular/router';
import { Show } from './show.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {
  name: string;
  constructor() {
  }

  ngOnInit() {
  }


}
