import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingLayoutRoutes } from './landing.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing.component';


@NgModule({
  imports: [
    RouterModule.forChild(LandingLayoutRoutes),
    NgbModule
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingLayoutModule { }
