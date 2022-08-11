import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinearBDComponent } from './graphs/linear-bd/linear-bd.component';
import { LinearComponent } from './graphs/linear/linear.component';

export const routes: Routes = [
  {
    path: 'linear',
    component: LinearComponent
  },
  {
    path: 'linearBD',
    component: LinearBDComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
