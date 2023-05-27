import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { FareComponent } from 'src/app/pages/fare/fare.component';
import { PassComponent } from 'src/app/pages/pass/pass.component';
import { AnalyticsComponent } from 'src/app/pages/analytics/analytics.component';
import { AnalyticsNewComponent } from 'src/app/pages/analytics/analytics2/analytics2.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',       component: DashboardComponent },
    { path: 'fare',            component: FareComponent},
    { path: 'pass',            component: PassComponent},
    { path: 'admin',           component: UserProfileComponent },
    { path: 'analytics',       component: AnalyticsComponent},
    { path: 'analytics2',      component: AnalyticsNewComponent},
];
