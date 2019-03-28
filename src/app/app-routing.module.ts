import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowDetailComponent} from './shows/show-detail/show-detail.component';
import {ShowsComponent} from './shows/shows.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: ShowsComponent},
  {path: 'shows/:query', component: ShowDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
