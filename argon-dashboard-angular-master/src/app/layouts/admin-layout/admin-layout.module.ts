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
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddPassComponent } from 'src/app/pages/pass/addPass/addPass.component';
import { VideoComponent } from 'src/app/pages/video/video.component';
import { MatTabsModule } from '@angular/material/tabs';
import { UserProfileDataComponent } from 'src/app/pages/userProfile/userProfileData.component';
import {MatRadioModule} from '@angular/material/radio';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    PassComponent,
    AddPassComponent,
    AnalyticsComponent,
    IconsComponent,
    AnalyticsNewComponent,
    VideoComponent,
    UserProfileDataComponent,
  ],
  entryComponents: [AddPassComponent]
})

export class AdminLayoutModule {}
