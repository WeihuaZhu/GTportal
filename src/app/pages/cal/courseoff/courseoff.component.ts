import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'ngx-courseoff',
    templateUrl: './courseoff.component.html',
    styleUrls: ['./courseoff.component.scss'],
})



export class CourseoffComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        window.open('https://gatech.courseoff.com/workspace');
    }

    goToCourseoff(): void {
        window.open('https://gatech.courseoff.com/workspace');
    }

}
