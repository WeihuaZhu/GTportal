import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
    <nb-card>
      <nb-card-header> GT Campus Map </nb-card-header>
      <nb-card-body>
        <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom" (mapClick)="onChoseLocation($event)">
          <agm-marker
              [latitude]="lat"
              [longitude]="lng"
              *ngIf="locationChosen">
          </agm-marker>
        </agm-map>
      </nb-card-body>
    </nb-card>
  `,
})
export class GmapsComponent {
  zoom = 15;
  lat = 33.7756178;
  lng = -84.3962850;
  locationChosen = false;

  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }
}
