import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from './side-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [SideBarComponent],
})
export class SideBarModule {}
