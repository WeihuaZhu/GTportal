import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'ngx-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {

    constructor(@Inject(DOCUMENT) private document: any) { }

    ngOnInit() {
    }

    goToUrl(): void {
        window.open('https://gatech.courseoff.com/workspace');
    }

}