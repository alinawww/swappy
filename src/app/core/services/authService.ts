import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginResponse } from '../models/loginResponse';
import { StorageService } from './storage.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://5c505db9ee97f600140480dd.mockapi.io/auth';
  private loginResponse: LoginResponse;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {
    // this.loginResponse = storageService.getItem('loginResponse');
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.authUrl, { username, password })
      .pipe(
        map(loginResponse => {
          this.handleLoginSuccess(loginResponse);
          return loginResponse;
        }),
        catchError(this.handleLoginError)
      );
  }

  logout(): void {
    this.loginResponse = null;
    this.storageService.removeItem('loginResponse');
  }

  isLoggedIn(): boolean {
    return this.loginResponse ? true : false;
  }

  getUser(): User {
    return this.loginResponse.user;
  }

  private handleLoginSuccess(loginResponse: LoginResponse) {
    this.loginResponse = loginResponse;
    this.storageService.setItem('loginResponse', loginResponse);
  }

  private handleLoginError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      return throwError(error.statusText || 'backend server error');
    }
    return throwError(error || 'Server error');
  }
}
