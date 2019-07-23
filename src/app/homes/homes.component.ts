import { Component, OnInit } from '@angular/core';
import { HouseComponent } from '../house/house.component';
import { Router } from '@angular/router';
import { HouseService } from '../core/services/house.service';
import { mockHomes } from '../core/mockData/homes';
import { House } from '../core/models/house';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {
  homes: House[];
  constructor(
    private houseService: HouseService,
    private router: Router,
    private storageService: StorageService
    ) {}

  ngOnInit() {
    this.getHomes();
  }

  getHomes() {
    //TODO Add proper subscription to get homes
    this.houseService.getHomes()
      .subscribe(homes => this.homes = homes);

    // this.homes = this.storageService.getItem('homes');
    // if (!this.homes) {
    //   this.storageService.setItem('homes', mockHomes);
    // }
  }

  onDetailsHouse(house) {
    this.houseService.setSelectedHouse(house);
    this.router.navigate(['details', house.accomodation_id]);
  }
}