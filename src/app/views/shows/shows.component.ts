import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../models/service.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Capture search input into variable <query> and load <show-detail> view via routerLink

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  query: string;
  constructor() {
  }

  ngOnInit() {
  }


}
