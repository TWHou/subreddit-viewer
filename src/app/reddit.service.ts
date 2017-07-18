import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RedditService {

  constructor(private http: Http) { }
  
  private getUrl(subreddit: string, after=""): string {
    return `https://www.reddit.com/r/${subreddit}/top/.json?after=${after}`;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getPosts(subreddit: string, after=""): Promise<any> {
    return this.http.get(this.getUrl(subreddit, after))
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }
  
  getFavs(favs:string): Promise<any> {
    return this.http.get(`https://www.reddit.com/by_id/${favs}.json`)
      .toPromise()
      .then((response) => response.json().data)
      .catch(this.handleError);
  }
}