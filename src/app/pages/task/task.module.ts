import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { TaskRoutingModule, routedComponents } from './task-routing.module';

import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
      libraries: ['places'],
    }),
    LeafletModule.forRoot(),
    TaskRoutingModule,
    NgxEchartsModule,
    AgmDirectionModule,

  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
})
export class TaskModule { }
