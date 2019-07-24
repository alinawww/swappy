import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { mockHomes } from '../core/mockData/homes';
import { House } from '../core/models/house';
import { AuthService } from '../core/services/authService';
import { HouseService } from '../core/services/house.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../core/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  properties: any;
  currentUser: User;
  constructor(
    private router: Router,
    private authService: AuthService,
    private houseService: HouseService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      this.properties = user.accomodation;
      console.log(this.properties);
      
      return this.currentUser = user;
    });
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`http://localhost:5000/people/${1}`).pipe(
      map(currentUser => currentUser),
      catchError(this.handleError)
    );
  }

  onAddHouse(house) {
    this.router.navigate(['add-house']);
  }

  onEditHouse(houseID) {
    this.router.navigate(['update-house', houseID]);
  }

  logout() {
    this.authService.logout();
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      return throwError(error.statusText || 'backend server error');
    }
    return throwError(error || 'Server error');
  }

}
