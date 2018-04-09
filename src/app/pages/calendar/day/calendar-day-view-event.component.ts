import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { DayViewEvent } from 'calendar-utils';

@Component({
  selector: 'ngx-mwl-calendar-day-view-event',
  template: `
    <ng-template
      #defaultTemplate
      let-dayEvent="dayEvent"
      let-tooltipPlacement="tooltipPlacement"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody">
      <div
        class="cal-event"
        [style.backgroundColor]="dayEvent.event.color?.secondary"
        [style.borderColor]="dayEvent.event.color?.primary"
        [ngxMwlCalendarTooltip]="dayEvent.event.title | calendarEventTitle:'dayTooltip':dayEvent.event"
        [tooltipPlacement]="tooltipPlacement"
        [tooltipEvent]="dayEvent.event"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipAppendToBody]="tooltipAppendToBody">
        <ngx-mwl-calendar-event-actions [event]="dayEvent.event"></ngx-mwl-calendar-event-actions>
        <ngx-mwl-calendar-event-title
          [event]="dayEvent.event"
          [customTemplate]="eventTitleTemplate"
          view="day"
          (mwlClick)="eventClicked.emit()">
        </ngx-mwl-calendar-event-title>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        dayEvent: dayEvent,
        tooltipPlacement: tooltipPlacement,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody
      }">
    </ng-template>
  `,
})
export class CalendarDayViewEventComponent {
  @Input() dayEvent: DayViewEvent;

  @Input() tooltipPlacement: string;

  @Input() tooltipAppendToBody: boolean;

  @Input() customTemplate: TemplateRef<any>;

  @Input() eventTitleTemplate: TemplateRef<any>;

  @Input() tooltipTemplate: TemplateRef<any>;

  @Output() eventClicked: EventEmitter<any> = new EventEmitter();
}
