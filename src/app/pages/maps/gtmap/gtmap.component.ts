import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'ngx-gtmap',
    templateUrl: './gtmap.component.html',
    styleUrls: ['./gtmap.component.scss'],
})



export class GtmapComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        window.open('http://map.gatech.edu');
    }

    goToCampusMap(): void {
        window.open('http://map.gatech.edu');
    }

}
