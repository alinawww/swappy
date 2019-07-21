import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { House } from '../core/models/house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {
  @Input() house: House;
  @Output() details = new EventEmitter<House>();
  constructor() { }

  // ngOnInit() {
  // }

  onDetailsClick(house: House) {
    if (this.details) {
      this.details.emit(house);
    }
  }

}
