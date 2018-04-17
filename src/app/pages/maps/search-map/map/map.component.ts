import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../entity/Location';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  
  latitude: number;
  longitude: number;
  zoom: number;
  dir = undefined;
  templat = undefined;
  templnt = undefined;

  @Input()
  public set searchedLocation(searchedLocation: Location) {
    this.templat = this.latitude;
    this.templnt = this.longitude;
    this.latitude = searchedLocation.latitude;
    this.longitude = searchedLocation.longitude;
    this.zoom = 15;
  }

  ngOnInit(): void {
    // set up current location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.searchedLocation = new Location(
          position.coords.latitude, position.coords.longitude,
        );
      });
    }
  }

  getDirection() {
    this.dir = {
      origin: { lat: this.templat, lng: this.templnt },
      destination: { lat: this.latitude, lng: this.longitude },
      travelMode: 'WALKING',
    }
    
  }

}