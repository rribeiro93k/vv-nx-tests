import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciComponent } from './fibonacci.component';

const routes: Routes = [
  {
    path: '',
    component: FibonacciComponent
  },
  {
    path: 'fibonacci',
    component: FibonacciComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class FibonacciRoutingModule { }
