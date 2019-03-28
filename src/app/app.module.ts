import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule,
  MatNativeDateModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { SubmittedDirective } from './shared/submitted.directive';
import { UnsubmittedDirective } from './shared/unsubmitted.directive';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShowDetailComponent } from './shows/show-detail/show-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { SeasonsComponent } from './seasons/seasons.component';
import { EpisodesComponent } from './episodes/episodes.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    SubmittedDirective,
    UnsubmittedDirective,
    ShowDetailComponent,
    SeasonsComponent,
    EpisodesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static ShowsComponent: any;
}
