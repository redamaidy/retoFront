import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  /*{
    path: 'grafica1',
    loadChildren: () =>
      import('./modules/postulation/postulation.module').then(
        (m) => m.PostulationModule
      )
  }*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
