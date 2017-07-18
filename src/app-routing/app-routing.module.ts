import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubredditComponent } from '../app/subreddit/subreddit.component';


const routes: Routes = [
  { path: '', redirectTo: '/subreddit', pathMatch: 'full' },
  { path: 'subreddit', component: SubredditComponent },
  { path: 'favorites', component: SubredditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}