import { Component, OnInit } from '@angular/core';
import { HouseComponent } from '../house/house.component';
import { Router } from '@angular/router';
import { HouseService } from '../core/services/house.service';
import { mockHomes } from '../core/mockData/homes';
import { House } from '../core/models/house';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {
  homes: House[] = [];
  constructor(
    private houseService: HouseService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getHomes();
  }

  getHomes() {
    // this.houseService.getHomes()
    //   .subscribe(homes => this.homes = homes);
    this.homes = mockHomes;
  }

  goToHouse(house) {
    this.houseService.setSelectedHouse(house);
    this.router.navigate(['details']);
  }

}
