import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/core/models/house';
import { HouseService } from '../core/services/house.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  house: House;

  constructor(
    private houseService: HouseService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.house = this.houseService.getSelectedHouse();
    if (!this.house) {
      console.log('no house fund');
      // this.toastr.warning('Please select a house first!');
      this.router.navigate(['homes']);
    }
  }

}
