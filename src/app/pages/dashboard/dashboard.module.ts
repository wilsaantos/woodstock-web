import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TopBarModule } from 'src/app/components/top-bar/top-bar.module';
import { SideBarModule } from 'src/app/components/side-bar/side-bar.module';
import { BarService } from 'src/app/services/bar.service';
import { BarModule } from 'src/app/components/bar/bar.module';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BarModule],
  providers: [BarService],
})
export class DashboardModule {}
