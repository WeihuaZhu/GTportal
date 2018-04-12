import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'ngx-courseoff',
  templateUrl: './courseoff.component.html',
  styleUrls: ['./courseoff.component.scss'],
})



export class CourseoffComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
  }

  goToUrl(): void {
    this.document.location.href = 'https://stackoverflow.com';
  }

}
