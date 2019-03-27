import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../models/service.service';
import {Router} from '@angular/router';
import { Show } from './show.model';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {
  enabled = false;
  name: string;
  premiered: Date;
  shows: any;
  selectedShow: Show;

  // shows: Show[] = [
  //   {name: 'The Magician', premiered: new Date('1997-10-11'), status: 'Running'},
  //   {name: 'A Magic World', premiered: new Date('1998-09-15'), status: 'Ended'},
  //   {name: 'The Magic World Of Harry Potter', premiered: new Date('1999-06-06'), status: 'Running'}
  // ]

  constructor(private service: ServiceService, private router: Router) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.enabled = true;
    }, 2000);
  }

  // onSubmit() {
  //   const show = new Show();
  //   show.name = this.name;
  //   show.premiered = this.premiered;
  //   show.status = 'Initial';
  //   this.shows.push(show);


  // }

  // setSelected(show: Show) {
  //   this.selectedShow = show;
  // }

  searchShows() {
    this.service.getShows(this.name).subscribe(search1 => {
      this.shows = search1;
      console.log(search1);
      console.log(this.shows);
    });
  }

  goToEpisodes(show) {
    this.router.navigate(['/episodes', show.show.id]);
  }
}
