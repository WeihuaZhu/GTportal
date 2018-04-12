import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DxSchedulerModule } from 'devextreme-angular';
import { CalendarRoutingModule, routedComponents } from './calendar-routing.module';
import { CourseoffComponent } from './courseoff/courseoff.component';

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
    CourseoffComponent,
  ],
})
export class CalendarModule { }
