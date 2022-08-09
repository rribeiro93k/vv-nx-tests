import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.modules').then(m => m.HomeModule)
  },
  {
    path: 'fibonacci',
    loadChildren: () => import('./pages/fibonacci/fibonacci.module').then(m => m.FibonacciModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
