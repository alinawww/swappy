import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthResponse } from '../models/authResponse';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://5c505db9ee97f600140480dd.mockapi.io/auth';
  private authResponse: AuthResponse;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {
    this.authResponse = storageService.getItem('authResponse');
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(this.authUrl, { username, password })
      .pipe(
        map(authResponse => {
          this.handleLoginSuccess(authResponse);
          return authResponse;
        }),
        catchError(this.handleLoginError)
      );
  }

  logout(): void {
    this.authResponse = null;
    this.storageService.removeItem('authResponse');
  }

  isLoggedIn(): boolean {
    return this.authResponse ? true : false;
  }

  getUser(): any {
    return this.authResponse.user;
  }

  private handleLoginSuccess(authResponse: AuthResponse) {
    authResponse['user'] = {
      firstName: 'Bastien',
      lastName: 'Boutonnet',
      emailAddress: 'bboutonnet@tripactions.com',
    };
    this.authResponse = authResponse;
    this.storageService.setItem('authResponse', authResponse);
  }

  private handleLoginError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      return throwError(error.statusText || 'backend server error');
    }
    return throwError(error || 'Server error');
  }
}
