import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from './task.component';
import { GcalendarComponent } from './gcalendar/gcalendar.component';
import { TaskmComponent } from './taskm/taskm.component';

const routes: Routes = [{
  path: '',
  component: TaskComponent,
  children: [{
    path: 'gcalendar',
    component: GcalendarComponent,
  }, {
    path: 'taskm',
    component: TaskmComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule { }

export const routedComponents = [
  TaskComponent,
  GcalendarComponent,
  TaskmComponent,
];
