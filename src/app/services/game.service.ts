import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Games} from '../models/games';

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv'
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private URL = 'https://api.themoviedb.org/3';
  // tslint:disable-next-line:variable-name
  private api_key = environment.api;

  constructor(private http: HttpClient) {
  }

  getLatestMovie(): Observable<Games> {
    return this.http.get<Games>(`${this.URL}${endpoint.latest}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getNowPlaying(): Observable<Games> {
    return this.http.get<Games>(`${this.URL}${endpoint.now_playing}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getOriginals(): Observable<Games> {
    return this.http.get<Games>(`${this.URL}${endpoint.originals}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getPopularGames(): Observable<Games> {
    return this.http.get<Games>(`${this.URL}${endpoint.popular}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getTopRated(): Observable<Games> {
    return this.http.get<Games>(`${this.URL}${endpoint.top_rated}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getTrending(): Observable<Games> {
    return this.http.get<Games>(`${this.URL}${endpoint.trending}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

}
