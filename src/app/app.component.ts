import { Component, OnInit } from '@angular/core';

import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  subreddit = 'analog';
  favorites: number = 0;

  constructor(private _favoritesService: FavoritesService) {
    _favoritesService.favoritesSource$.subscribe(
      event => {
        this.favorites += event;
      }
    );
  }

  ngOnInit() {
    if (localStorage.getItem('favorites')) {
      this.favorites = localStorage.getItem('favorites')
        .split(',').filter((ele) => ele).length;
    }
  }

}
