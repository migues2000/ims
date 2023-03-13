import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewPage } from './pages/overview/overview.page';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [OverviewPage],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
