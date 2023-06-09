import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { FareComponent } from 'src/app/pages/fare/fare.component';
import { PassComponent } from 'src/app/pages/pass/pass.component';
import { AnalyticsComponent } from 'src/app/pages/analytics/analytics.component';
import { AnalyticsNewComponent } from 'src/app/pages/analytics/analytics2/analytics2.component';
import { VideoComponent } from 'src/app/pages/video/video.component';
import { UserProfileDataComponent } from 'src/app/pages/userProfile/userProfileData.component';
import { ReportComponent } from 'src/app/pages/report/report.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',       component: DashboardComponent },
    { path: 'fare',            component: FareComponent},
    { path: 'pass',            component: PassComponent},
    { path: 'admin',           component: UserProfileComponent },
    { path: 'analytics',       component: AnalyticsComponent},
    { path: 'analytics2',      component: AnalyticsNewComponent},
    { path: 'video',           component: VideoComponent},
    { path: 'user',            component: UserProfileDataComponent},
    { path: 'report',          component: ReportComponent}
];
