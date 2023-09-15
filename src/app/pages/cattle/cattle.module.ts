import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CattleComponent } from './cattle.component';
import { BarModule } from 'src/app/components/bar/bar.module';

const routes: Routes = [{ path: '', component: CattleComponent }];

@NgModule({
  declarations: [CattleComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BarModule],
})
export class CattleModule {}
