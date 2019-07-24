import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { House } from '../core/models/house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {
  @Input() house: House;
  @Output() details = new EventEmitter<House>();
  loaded = false;
  constructor() { }

  onDetailsClick(house: House) {
    if (this.details) {
      this.details.emit(house);
    }
  }

}
