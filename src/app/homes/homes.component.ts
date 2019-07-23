import { Component, OnInit, OnDestroy } from '@angular/core';
import { HouseComponent } from '../house/house.component';
import { Router } from '@angular/router';
import { HouseService } from '../core/services/house.service';
// import { mockHomes } from '../core/mockData/homes';
import { House } from '../core/models/house';
import { StorageService } from '../core/services/storage.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as moment from 'moment';


@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit, OnDestroy {
  homes: House[];
  selectedDates;
  selectedCity;
  datesFilter = new FormControl('');
  cityFilter = new FormControl('');
  houseSubscription: Subscription;
  filteredHomes = [];
  constructor(
    private houseService: HouseService,
    private router: Router,
    private storageService: StorageService
    ) {}

  ngOnInit() {
  this.getHomes();
  }

  getHomes() {
    this.houseSubscription = this.houseService.getHomes()
      .subscribe(homes => this.homes = homes);
  }

  onDetailsHouse(house) {
    this.houseService.setSelectedHouse(house);
    this.router.navigate(['details', house.accomodation_id]);
  }

  updateDatesFilter() {
    if (this.selectedDates) {
      const startDate = moment(this.selectedDates[0]).unix();
      const endDate = moment(this.selectedDates[1]).unix();
      this.homes = this.homes.filter(home => {
        const availableFromDate =  moment(home.availabilities[0].start_date).unix();
        const availableToDate = moment(home.availabilities[0].end_date).unix();
        return availableFromDate <= startDate && availableToDate >= endDate;
      });
    }
  }

  updateCityFilter() {
    if (this.selectedCity) {
      this.homes = this.homes.filter(home => {
        return home.city.toLowerCase().includes(this.selectedCity.toLowerCase());
      });
    }
  }

  ngOnDestroy(): void {
    if (this.houseSubscription) {
      this.houseSubscription.unsubscribe();
    }
  }
}
