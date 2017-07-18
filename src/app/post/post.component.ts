import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  @Input() post;
  @Output() onDelete = new EventEmitter<string>();
  subreddit: boolean;
  favorites: boolean;
  hover: boolean;

  constructor(
    private _router:Router,
    private _favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    if(this._router.url === '/subreddit') {
      this.subreddit = true;
    } else {
      this.favorites = true;
    }
  }

  mouseover() {
    this.hover = true;
  }
  mouseout() {
    this.hover = false;
  }
  addFav() {
    this._favoritesService.addFavorite(this.post.name+',');
    this.post.favorite = true;
  }
  delFav() {
    this._favoritesService.deleteFavorite(this.post.name+',');
    this.post.favorite = false;
    this.onDelete.emit(this.post.name);
  }
}
