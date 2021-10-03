import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyloancalculaterComponent } from './myloancalculater/myloancalculater.component';

const routes: Routes = [
  {
    path:'loan/calculater',
    component: MyloancalculaterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
