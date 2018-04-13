import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CallbackComponent } from './callback/callback.component';
// import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'contact',
    loadChildren: './contact/forms.module#FormsModule',
  }, {
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarModule',
  },
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
},
{
  path: 'callback',
  component: CallbackComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
