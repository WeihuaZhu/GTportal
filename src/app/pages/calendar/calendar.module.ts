import { Component, NgModule, ModuleWithProviders } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DraggableHelper } from 'angular-draggable-droppable';
import {
  CalendarCommonModule,
  CalendarModuleConfig,
  CalendarEventTitleFormatter,
  CalendarDateFormatter,
  CalendarUtils,
} from './common/calendar-common.module';
import { CalendarMonthModule } from './month/calendar-month.module';
import { CalendarWeekModule } from './week/calendar-week.module';
import { CalendarDayModule } from './day/calendar-day.module';
import { CalendarRoutingModule, routedComponents } from './calendar-routing.module';

export * from './common/calendar-common.module';
export * from './month/calendar-month.module';
export * from './week/calendar-week.module';
export * from './day/calendar-day.module';

/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
@NgModule({
  imports: [
    ThemeModule,
    CalendarRoutingModule,
    NgxEchartsModule,
    CalendarCommonModule,
    CalendarMonthModule,
    CalendarWeekModule,
    CalendarDayModule,
  ],
  exports: [
    CalendarModule,
    CalendarCommonModule,
    CalendarMonthModule,
    CalendarWeekModule,
    CalendarDayModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class CalendarModule {
  static forRoot(config: CalendarModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: CalendarModule,
      providers: [
        // DraggableHelper,
        config.eventTitleFormatter || CalendarEventTitleFormatter,
        config.dateFormatter || CalendarDateFormatter,
        config.utils || CalendarUtils,
      ],
    };
  }
}
