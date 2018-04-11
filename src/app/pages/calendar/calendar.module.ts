import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DxSchedulerModule } from 'devextreme-angular';
import { CalendarRoutingModule, routedComponents } from './calendar-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    CalendarRoutingModule,
    NgxEchartsModule,
    DxSchedulerModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
})
export class CalendarModule { }
