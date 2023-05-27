import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { PassComponent } from 'src/app/pages/pass/pass.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnalyticsComponent } from 'src/app/pages/analytics/analytics.component';
import { IconsComponent } from 'src/app/pages/icons/icons.component';
import { AnalyticsNewComponent } from 'src/app/pages/analytics/analytics2/analytics2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    PassComponent,
    AnalyticsComponent,
    IconsComponent,
    AnalyticsNewComponent,

  ]
})

export class AdminLayoutModule {}
