import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TeamComponent } from './team/team.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import {SmartTableService} from '../../@core/data/smart-table.service';
import {SmartTableComponent} from './smart-table/smart-table.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { UtilityLinksComponent } from './utility-links/utility-links.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
      Ng2SmartTableModule,
  ],
  declarations: [
      SmartTableComponent,
    DashboardComponent,
    StatusCardComponent,
    ContactsComponent,
    TeamComponent,
    SecurityCamerasComponent,
    UtilityLinksComponent,
  ],
    providers: [
        SmartTableService,
    ],
})
export class DashboardModule { }
