import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './providers.component';
import { RouterModule, Routes } from '@angular/router';
import { BarModule } from 'src/app/components/bar/bar.module';

const routes: Routes = [{ path: '', component: ProvidersComponent }];

@NgModule({
  declarations: [ProvidersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BarModule],
})
export class ProvidersModule {}
