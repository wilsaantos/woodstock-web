import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { BarService } from 'src/app/services/bar.service';
import { SideBarModule } from '../side-bar/side-bar.module';
import { TopBarModule } from '../top-bar/top-bar.module';

@NgModule({
  declarations: [BarComponent],
  imports: [CommonModule, SideBarModule, TopBarModule],
  exports: [BarComponent],
  providers: [BarService],
})
export class BarModule {}
