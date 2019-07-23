import { Component, OnInit, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { House } from 'src/app/core/models/house';
import { HouseService } from '../core/services/house.service';
import { Router } from '@angular/router';

const w: any = window;
const google = w.google;

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  house: House;
  carPickupGoogleLocationString: any = {};
  @ViewChild('map') gmapElement: ElementRef;
  map: any;
  mapMarker: any;
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

  initMap() {
    const coordsUS = {
      latitude: 37.2761867,
      longitude: -104.6489368
    };
    const mapProp = {
      center: new google.maps.LatLng(coordsUS.latitude, coordsUS.longitude),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true,
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.mapMarker = new google.maps.Marker({ position: mapProp.center, map: this.map, animation: google.maps.Animation.DROP});
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
}
