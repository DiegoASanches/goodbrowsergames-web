import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  salt: string;
  role?: Role[];
}

export interface Role {
  name: string;
}

export interface LoginResult {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  login(data: LoginData) {
    return this.http.post(`${environment.apiEndpoint}/login`, data).pipe(
      tap((result: LoginResult) => {
        if (!result.token || !result.user) { return; }
        this.saveToken(result.token);
        this.saveUser(result.user);
      }),
    );
  }

  signup(data: User) {
    return this.http.post(`${environment.apiEndpoint}/user`, data).pipe(
      tap(result => {
        console.log('result', result);
      }),
    );
  }

  saveToken(token: string) {
    localStorage.setItem('AuthToken', token);
  }

  saveUser(user: User) {
    localStorage.setItem('User', JSON.stringify(user));
  }

  getMyUser(): User {
    return JSON.parse(localStorage.getItem('User'));
  }

  getToken(): string {
    return localStorage.getItem('AuthToken');
  }

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }


}
