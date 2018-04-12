import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-utility-links',
  styleUrls: ['./utility-links.component.scss'],
    template: `
    <span class="created-by"><b><a href="https://akveo.com" target="_blank"></a></b></span>
    <div class="socials">
      <a href="https://github.com/" target="_blank" class="ion ion-social-github"></a><p>Github</p>
      <a href="https://www.facebook.com/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/Twitter" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class UtilityLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
