import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { DxSchedulerModule } from 'devextreme-angular';
import {CalendarComponent} from './calendar/calendar.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    DxSchedulerModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
      CalendarComponent,
  ],
})
export class PagesModule {
}
