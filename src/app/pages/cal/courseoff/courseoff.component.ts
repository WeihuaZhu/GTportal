import {Component, Inject, OnInit} from '@angular/core';
@Component({
    selector: 'ngx-courseoff',
    templateUrl: './courseoff.component.html',
    styleUrls: ['./courseoff.component.scss'],
})



export class CourseoffComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    goToCourseoff(): void {
        window.open('https://gatech.courseoff.com/workspace');
    }

}
