import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar.component';
import { GcalendarComponent} from './gcalendar/gcalendar.component';
import {CourseoffComponent} from './courseoff/courseoff.component';

const routes: Routes = [{
  path: '',
  component: CalendarComponent,
  children: [{
    path: 'gcalendar',
    component: GcalendarComponent,
  }, {
      path: 'courseoff',
      component: CourseoffComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule { }

export const routedComponents = [
  CalendarComponent,
  GcalendarComponent,
];
