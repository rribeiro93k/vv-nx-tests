import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { FibonacciRoutingModule } from './fibonacci-routing.module';
import { FibonacciComponent } from './fibonacci.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FibonacciRoutingModule,
    MatChipsModule
  ],
  exports: [FibonacciComponent],
  declarations: [FibonacciComponent]
})
export class FibonacciModule { }
