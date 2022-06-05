import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

export interface Evaluation {
  user: string;
  game: string;
  description: string;
  grade: number;
}

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) {}

  updateOrCreate(gameId: string, description: string, grade: number): Observable<Evaluation> {
    const user = this.loginService.getMyUser();
    return this.http.put<Evaluation>(`${environment.apiEndpoint}/evaluation`, {
      user: user._id,
      game: gameId,
      description,
      grade
    });
  }

  get(gameId: string) {
    return this.http.get(`${environment.apiEndpoint}/evaluation?game=${gameId}`);
  }

}
