import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Games, ResultsEntity} from '../models/games';
import { LoginService } from './login.service';

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

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) {
  }

  getTrending(): Observable<Games> {
    return this.http.get<Games>(`${environment.apiEndpoint}/game`);
  }

  getMyGames(): Observable<Games> {
    const user = this.loginService.getMyUser();
    return this.http.get<Games>(`${environment.apiEndpoint}/myGames?_id=${user._id}`);
  }

  getOneGame(gameID: string): Observable<ResultsEntity> {
    return this.http.get<ResultsEntity>(`${environment.apiEndpoint}/game/getOneGame/${gameID}`);
  }

  create(data: ResultsEntity) {
    return this.http.post<ResultsEntity>(`${environment.apiEndpoint}/game`, data);
  }

}
