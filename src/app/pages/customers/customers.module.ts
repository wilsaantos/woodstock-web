import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { BarModule } from 'src/app/components/bar/bar.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CustomersComponent }];

@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BarModule],
})
export class CustomersModule {}
