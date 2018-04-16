import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalComponent } from './cal.component';
import { GcalendarComponent } from './gcalendar/gcalendar.component';
import { CourseoffComponent } from './courseoff/courseoff.component';

const routes: Routes = [{
  path: '',
  component: CalComponent,
  children: [{
    path: 'gcalendar',
    component: GcalendarComponent,
  }, {
    path: 'courseoff',
    component: CourseoffComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalRoutingModule { }

export const routedComponents = [
  CalComponent,
  GcalendarComponent,
  CourseoffComponent,
];
