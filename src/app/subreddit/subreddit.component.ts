import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post';
import { RedditService } from '../reddit.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {
  
  currentSub: string = 'analog';
  posts: Post[] = [];
  after: string;

  constructor(
    private _router:Router,
    private _redditService: RedditService,
    private _favoritesService: FavoritesService
  ) { }

  checkFav(name) {
    return localStorage.getItem('favorites') && localStorage.getItem('favorites').includes(name);
  }

  ngOnInit() {
    if(this._router.url === '/subreddit') {
      this._redditService.getPosts(this.currentSub).then(
        (data) => {
          this.posts = data.children.map((post) => ({
            name: post.data.name,
            author: post.data.author,
            title: post.data.title,
            img: post.data.url,
            time: new Date(post.data.created_utc*1000),
            score: post.data.score,
            favorite: this.checkFav(post.data.name)
          }));
          this.after = data.after;
        }
      )
    } else {
      const favs = localStorage.getItem('favorites');
      if(favs){
        this._redditService.getFavs(favs).then(
          (data) => {
            this.posts = data.children.map((post) => ({
              name: post.data.name,
              author: post.data.author,
              title: post.data.title,
              img: post.data.url,
              time: new Date(post.data.created_utc*1000),
              score: post.data.score,
              favorite: true
            }));
          }
        )
      }
    }
  }

  onDelete(name: string) {
    this.posts = this.posts.filter((post) => post.name !== name);
  }
}
