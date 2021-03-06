import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { House } from '../core/models/house';
import { map, catchError, switchMap } from 'rxjs/operators';
import { StorageService } from '../core/services/storage.service';
import { mockHomes } from '../core/mockData/homes';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { log } from 'util';
import { HouseService } from '../core/services/house.service';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.scss']
})
export class HouseEditComponent implements OnInit, OnChanges {
  houseForm: FormGroup;
  saveHouseSub: Subscription;
  bookingUrl: '/people/2/accommodation';
  amenities  = [
    'smarttv',
    'washer',
    'dyrer',
    'oven',
    'wifi',
    'car'
  ];
  availabilityDates = [];
  selectedFiles: File[] = [];

  selectedHouse: House = null;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private houseService: HouseService
  ) {
    this.createForm();
   }

  ngOnInit() {
    if (this.selectedHouse) {
      this.populateForm();
    }
  }

  createForm() {
    const newHouseId = Math.random().toString(36).substr(2, 9);
    this.houseForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      id: [newHouseId, Validators.required],
      amenities: [this.amenities],
      files: [this.selectedFiles],
      availabilityRanges: [this.availabilityDates]
    });
  }

  populateForm() {
    this.houseForm.setValue({
      name: this.selectedHouse.name,
      description: this.selectedHouse.description,
      id: this.selectedHouse.id,
      amenities: this.selectedHouse.amenities,
      files: [this.selectedFiles],
      availabilityRanges: [this.availabilityDates]
    });
  }

  onSaveHouse() {
    // const formValue = {...this.houseForm.value};
    const formValue = {
      "address": "1343 Dream Big Avenue", 
      "city": "Palo Alto", 
      "description": "Blah blah blah", 
      "is_available": true, 
      "is_booked": false, 
      "name": "Kickass Mansion", 
      "office_id": 1, 
       
      "short_description": "12 en-suite Bedrooms, Jacuzzi", 
      
    }
    this.houseService.addHome(2, formValue).subscribe(response => {
      console.log(response);
    });
  }
  
  // saveHouse() {
    
  //   return this.http.post<House>(this.bookingUrl, formValue).pipe(
  //     map(response => response),
  //     catchError(this.handleError)
  //   );
  // }

  onFileChanged(event) {
    // console.log('event', event);
    
    // this.selectedFile = event.target.files[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

  // onUpload() {
  //   // this.http is the injected HttpClient
  //   const uploadData = new FormData();
  //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  //   // this.http.post('https://api.imgur.com/3/upload', uploadData)
  //   //   .subscribe(event => {
  //   //     console.log('myevent', event)
  //   //   });
  // }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      return throwError(error.statusText || 'backend server error');
    }
    return throwError(error || 'Server error');
  }
}
