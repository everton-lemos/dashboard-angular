import { DashboardService } from './dashboard.service';
import { DashboardRoutingModule } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
