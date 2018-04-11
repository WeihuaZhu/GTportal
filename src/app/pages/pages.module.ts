import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { DxSchedulerModule } from 'devextreme-angular';
import { NewcalendarComponent } from './newcalendar/newcalendar.component';
import { NewgcalendarComponent } from './newcalendar/newgcalendar/newgcalendar.component';

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
    NewcalendarComponent,
    NewgcalendarComponent,
  ],
})
export class PagesModule {
}
