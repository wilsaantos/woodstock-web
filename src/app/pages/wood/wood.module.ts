import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WoodComponent } from './wood.component';
import { RouterModule, Routes } from '@angular/router';
import { BarModule } from 'src/app/components/bar/bar.module';

const routes: Routes = [{ path: '', component: WoodComponent }];

@NgModule({
  declarations: [WoodComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BarModule],
})
export class WoodModule {}
