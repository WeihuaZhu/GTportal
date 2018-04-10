import { NgModule, Component, Inject, enableProdMode } from '@angular/core';
import { Http, HttpModule, Response, RequestOptionsArgs } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSchedulerModule } from 'devextreme-angular/ui/scheduler';
import 'rxjs/Rx';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

export interface CalendarRequestOptionsArgs extends RequestOptionsArgs {
  showDeleted?: boolean;
}

@Component({
  selector: 'ngx-gcalendar',
  styleUrls: ['./gcalendar.component.scss'],
  templateUrl: './gcalendar.component.html',
})
export class GcalendarComponent {
  dataSource: any;
  currentDate: Date = new Date(2018, 4, 10);
  constructor(@Inject(Http) private http: Http) {
    this.dataSource = new DataSource({
      store: new CustomStore({
        load: (options) => this.getData(options, { showDeleted: false }),
      }),
    });
  }

  private getData(options: any, requestOptions: CalendarRequestOptionsArgs) {
    const PUBLIC_KEY = 'AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k',
      CALENDAR_ID = 'f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com';
    const dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
      CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

    return this.http.get(dataUrl, requestOptions).toPromise().then(this.extractData);
  }
  private extractData(res: Response) {
    return res.json().items;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxSchedulerModule,
    HttpModule,
  ],
  declarations: [GcalendarComponent],
  bootstrap: [GcalendarComponent],
})
export class GcalendarModule { }

platformBrowserDynamic().bootstrapModule(GcalendarModule);
