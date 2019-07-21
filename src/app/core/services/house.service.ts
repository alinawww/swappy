import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { House } from '../models/house';
// import { BookResponse } from '../models/bookResponse';
// import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private hotelsUrl = 'http://5c505db9ee97f600140480dd.mockapi.io/hotels';
  private bookingUrl = 'http://5c505db9ee97f600140480dd.mockapi.io/booking';

  private selectedHouse: House;

  constructor(private http: HttpClient) {}

  // findHotels(): Observable<Hotel[]> {
  //   return this.http.get<Hotel[]>(this.hotelsUrl).pipe(
  //     map(hotels => hotels),
  //     catchError(this.handleError)
  //   );
  // }

  // bookHotel(hotel: Hotel): Observable<BookResponse> {
  //   return this.http.post<BookResponse>(this.bookingUrl, {}).pipe(
  //     map(bookResponse => bookResponse),
  //     catchError(this.handleError)
  //   );
  // }

  setSelectedHouse(house: House) {
    this.selectedHouse = house;
  }

  getSelectedHouse() {
    return this.selectedHouse;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      return throwError(error.statusText || 'backend server error');
    }
    return throwError(error || 'Server error');
  }
}
