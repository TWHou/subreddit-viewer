import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubredditComponent } from '../app/subreddit/subreddit.component';
import { FavoritesComponent } from '../app/favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: '/subreddit', pathMatch: 'full' },
  { path: 'subreddit', component: SubredditComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}