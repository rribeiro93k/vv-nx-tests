import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule
  ],
  exports: [SidebarComponent],
  declarations: [SidebarComponent]
})
export class SidebarModule { }
