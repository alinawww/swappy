import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mockHomes } from '../core/mockData/homes';
import { House } from '../core/models/house';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  property: House;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.findUserProperty();
  }

  findUserProperty() {
    this.property = mockHomes.find(home => home.userId === 123);
  }

  onAddHouse(house) {
    this.router.navigate(['add-house']);
  }

  onEditHouse() {
    this.router.navigate(['update-house', this.property.id]);
  }
}
