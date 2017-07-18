import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FavoritesService {

  // Observable sources
  private favoritesSource = new Subject<number>();

  // Observable streams
  favoritesSource$ = this.favoritesSource.asObservable();

  // Service message commands
  addFavorite(name: string) {
    this.favoritesSource.next(1);
    const savedFav = localStorage.getItem('favorites');
    if (savedFav) {
      localStorage.setItem('favorites', savedFav + name);
    } else {
      localStorage.setItem('favorites', name);
    }
  }
  
  deleteFavorite(name: string) {
    this.favoritesSource.next(-1);
    const favs = localStorage.getItem('favorites').replace(name, '');
    if (favs === '') {
      localStorage.removeItem('favorites');
    } else {
      localStorage.setItem('favorites', favs);
    }
  }
}
