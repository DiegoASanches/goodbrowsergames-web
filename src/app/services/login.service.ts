import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
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
        this.saveToken(result.token);
      }),
    );
  }

  signup(data: SignupData) {
    return this.http.post(`${environment.apiEndpoint}/user`, data).pipe(
      tap(result => {
        console.log('result', result);
      }),
    );
  }

  saveToken(token: string) {
    localStorage.setItem('AuthToken', token);
  }

  getToken(): string {
    return localStorage.getItem('AuthToken');
  }

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }


}
