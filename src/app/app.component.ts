/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
    // so, no html is needed here. The pages is just router outlet
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService, private analytics: AnalyticsService) {
    auth.handleAuth();
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
