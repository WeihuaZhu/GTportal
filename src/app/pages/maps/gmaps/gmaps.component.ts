import { Component } from '@angular/core';

import { AgmDirectionModule } from 'agm-direction'; //added
import { } from 'googlemaps';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
  
    <nb-card>
      <nb-card-header> GT Campus Map </nb-card-header>
      <nb-card-body>
      <button type="button" (click)="getDirection()">Get</button>
        <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom" (mapClick)="onChoseLocation($event)">
          <agm-direction *ngIf="dirChosen" [origin]="dir.origin" [destination]="dir.destination"></agm-direction>
        
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

  dir = undefined;
  dirChosen = false;
  getDirection() {
    this.dir = {
      origin: { lat: 33.7756178, lng: -84.3962850 },
      destination: { lat: 33.7800181, lng: -84.3939401 }
    }
    this.dirChosen = true;
  }
}
