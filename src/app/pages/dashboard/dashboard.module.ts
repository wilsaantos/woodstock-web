import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarModule } from 'src/app/components/bar/bar.module';
import { BarService } from 'src/app/services/bar.service';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BarModule],
  providers: [BarService],
})
export class DashboardModule {}
