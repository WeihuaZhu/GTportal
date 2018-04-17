import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'ngx-taskm',
    templateUrl: './taskm.component.html',
    styleUrls: ['./taskm.component.scss'],
})



export class TaskmComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    goToCourseoff(): void {
        window.open('https://gatech.courseoff.com/workspace');
    }

}
