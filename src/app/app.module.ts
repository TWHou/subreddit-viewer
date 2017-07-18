import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { SubredditComponent } from './subreddit/subreddit.component';
import { PostComponent } from './post/post.component';
import { RedditService } from './reddit.service';
import { FavoritesService } from './favorites.service';

@NgModule({
  declarations: [
    AppComponent,
    SubredditComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MomentModule
  ],
  providers: [
    RedditService,
    FavoritesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
