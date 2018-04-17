import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gcalendar.component.scss'],
  templateUrl: './gcalendar.component.html',
})
export class GcalendarComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        window.open('https://calendar.google.com/calendar/r/month');
    }

    goToCalendar(): void {
        window.open('https://calendar.google.com/calendar/r/month');
    }

}
