import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
